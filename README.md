# MCP服务器展示系统

MCP服务器展示系统是一个用于展示和管理MCP（Minimal Coding Project）服务器的平台。系统支持从GitHub自动获取仓库信息，展示服务器详情，并提供标签管理和分类功能。

## 功能特点

- 🌐 服务器展示：瀑布流布局展示各种MCP服务器
- 🔍 搜索功能：快速查找需要的服务器
- 🏷️ 标签筛选：通过标签类别筛选服务器
- 📊 统计功能：展示服务器数量和星标数量
- 👨‍💻 GitHub集成：自动获取仓库信息和星标数量
- 🔄 定时更新：定期更新GitHub星标数
- 🔒 管理后台：完整的服务器和标签管理功能

## 技术栈

- 后端：Node.js + Express + PostgreSQL + Sequelize
- 前端：EJS模板引擎 + TailwindCSS + Font Awesome
- 认证：JWT (JSON Web Token)
- 集成：GitHub API

## 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/zhuohaochina/zh-mcp.git
cd zh-mcp
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
```bash
# 复制环境变量文件
cp .env.example .env

# 编辑.env文件设置数据库和GitHub令牌
```

4. 创建数据库
```bash
# 在PostgreSQL中创建数据库
createdb mcp_db
```

5. 启动服务器
```bash
# 开发模式
npm run dev

# 生产模式
npm start
```

## 系统功能

### 前台展示

- 首页：展示所有MCP服务器，支持标签筛选和搜索
- 详情页：展示服务器详细信息，包括代码示例

### 后台管理

- 登录页：管理员登录
- 仪表板：总览系统数据
- 服务器管理：添加、编辑、删除服务器
- 标签管理：添加、编辑、删除标签

## 初始管理员账号

- 用户名：admin
- 密码：admin123

## 许可证

MIT