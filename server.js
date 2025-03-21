require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('./src/models');
const cron = require('node-cron');
const githubService = require('./src/services/githubService');
const adminController = require('./src/controllers/adminController');
const tagController = require('./src/controllers/tagController');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');

// 导入路由
const serverRoutes = require('./src/routes/serverRoutes');
const tagRoutes = require('./src/routes/tagRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const viewRoutes = require('./src/routes/viewRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 配置EJS模板引擎
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout');
app.set('layout extractScripts', true);

// 路由
app.use('/', viewRoutes);
app.use('/api/servers', serverRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/admin', adminRoutes);

// 定时任务 - 每天更新GitHub星数
cron.schedule('0 0 * * *', async () => {
  console.log('开始执行GitHub星数更新任务...');
  try {
    await githubService.updateAllServerStars();
    console.log('GitHub星数更新完成');
  } catch (error) {
    console.error('GitHub星数更新失败:', error);
  }
});

// 初始化默认标签
const initializeTags = async () => {
  const defaultTags = [
    { name: 'Database', color: 'blue' },
    { name: 'UI', color: 'purple' },
    { name: 'Backend', color: 'green' },
    { name: 'Framework', color: 'indigo' },
    { name: 'API', color: 'red' },
    { name: 'Auth', color: 'yellow' },
    { name: 'Utils', color: 'gray' },
    { name: 'Testing', color: 'pink' }
  ];

  for (const tag of defaultTags) {
    await tagController.createTagIfNotExists(tag);
  }
};

// 数据库同步并启动服务器
sequelize.sync({ alter: true })
  .then(async () => {
    console.log('数据库已同步');
    
    // 初始化默认标签
    await initializeTags();
    
    // 初始化管理员账号
    await adminController.initializeAdmin();
    
    app.listen(PORT, () => {
      console.log(`服务器运行在 http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('数据库同步失败:', err);
  });

module.exports = app;