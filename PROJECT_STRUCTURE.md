# 项目结构

```
zh-mcp/
├── .env                   # 环境变量配置文件（本地开发用，不提交到Git）
├── .env.example           # 环境变量示例文件
├── package.json           # 项目依赖配置
├── server.js              # 应用入口文件
├── public/                # 静态资源目录
│   ├── css/               # CSS样式文件
│   ├── js/                # 客户端JavaScript文件
│   └── images/            # 图片资源
│
├── views/                 # EJS视图模板
│   ├── admin-dashboard.ejs  # 管理员仪表板页面
│   ├── admin-form.ejs       # 服务器添加/编辑表单页面
│   ├── admin-login.ejs      # 管理员登录页面
│   ├── admin-tags.ejs       # 标签管理页面
│   ├── detail.ejs           # 服务器详情页面
│   ├── home.ejs             # 首页
│   └── layout.ejs           # 布局模板
│
└── src/                   # 源代码
    ├── config/            # 配置文件
    │   └── config.js      # 数据库配置
    │
    ├── controllers/       # 控制器
    │   ├── adminController.js   # 管理员相关控制器
    │   ├── serverController.js  # 服务器相关控制器
    │   └── tagController.js     # 标签相关控制器
    │
    ├── middleware/        # 中间件
    │   └── authMiddleware.js    # 认证中间件
    │
    ├── models/            # 数据模型
    │   ├── Admin.js       # 管理员模型
    │   ├── Server.js      # 服务器模型
    │   ├── Tag.js         # 标签模型
    │   ├── ServerTag.js   # 服务器-标签关联模型
    │   └── index.js       # 模型关联配置
    │
    ├── routes/            # 路由
    │   ├── adminRoutes.js # 管理员API路由
    │   ├── serverRoutes.js # 服务器API路由
    │   ├── tagRoutes.js   # 标签API路由
    │   └── viewRoutes.js  # 前端视图路由
    │
    ├── services/          # 服务
    │   └── githubService.js # GitHub API服务
    │
    └── utils/             # 工具函数
        └── helpers.js     # 辅助函数
```