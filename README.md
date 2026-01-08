# Agent Skills 完全指南 - Claude Code

让 Claude 学会你的工作方式——自动匹配专业知识，无需记忆命令

> 本项目使用 Astro + Tailwind CSS 构建，部署在 GitHub Pages

## 📁 项目结构

```
claude-skills-guide/
├── src/
│   ├── pages/
│   │   └── index.astro          # 主页
│   ├── components/
│   │   ├── Header.astro         # 导航栏
│   │   ├── Hero.astro           # Hero 区域
│   │   ├── WhatIsSkill.astro    # "什么是 Skills" 区域
│   │   ├── ThemeToggle.astro    # 主题切换按钮
│   │   └── Footer.astro         # 页脚
│   ├── layouts/
│   │   └── BaseLayout.astro     # 基础布局
│   └── styles/
│       └── global.css           # 全局样式
├── public/                      # 静态资源
├── astro.config.mjs            # Astro 配置
├── tailwind.config.mjs         # Tailwind CSS 配置
└── package.json                # 项目依赖
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:4321 查看网站

### 构建生产版本

```bash
npm run build
```

构建产物在 `dist/` 目录

### 预览构建结果

```bash
npm run preview
```

## 🛠️ 技术栈

- **Astro** - 现代静态网站生成器
- **Tailwind CSS** - 实用优先的 CSS 框架
- **TypeScript** - 类型安全
- **GitHub Pages** - 静态托管平台

## 📝 添加内容

### 修改现有内容

1. 找到对应的组件文件（如 `src/components/WhatIsSkill.astro`）
2. 直接修改内容
3. 保存后自动刷新

### 添加新的 Section

1. 创建新组件 `src/components/NewSection.astro`
2. 在 `src/pages/index.astro` 中引入：
```astro
---
import NewSection from '../components/NewSection.astro';
---

<!-- 在页面中添加 -->
<NewSection />
```

## 🎨 主题定制

### 修改颜色

编辑 `tailwind.config.mjs` 中的 `theme.extend.colors.claude`

### 修改全局样式

编辑 `src/styles/global.css`

## 📦 部署到 GitHub Pages

项目已配置 GitHub Actions，自动部署到 GitHub Pages。

### 本地部署测试

```bash
npm run build
# 将 dist 目录内容推送到 gh-pages 分支
```

### 自动部署

推送到 `main` 分支后，GitHub Actions 会自动：
1. 构建项目
2. 部署到 GitHub Pages

## 🔧 常见问题

### 样式不生效？

```bash
# 清除缓存并重新构建
rm -rf .astro dist node_modules
npm install
npm run build
```

### 端口被占用？

```bash
# 使用不同端口
npm run dev -- --port 3000
```

## 📄 许可证

MIT

## 🔗 相关链接

- [Astro 文档](https://docs.astro.build)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Claude Skills 官方文档](https://docs.anthropic.com/en/docs/build-with-claude/agent-skills)
