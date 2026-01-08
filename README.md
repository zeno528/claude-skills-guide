# Claude Skills 完全指南

> **让 Claude 学会你的工作方式——自动匹配专业知识，无需记忆命令**

**在线访问**：https://ekko7778.github.io/claude-skills-guide/

---

## 📖 项目简介

这是一个关于 Claude Code Skills 功能的完整指南网站，帮助用户快速理解和使用 Claude 的 Skills 系统。

### 什么是 Skills？

Skills 是 Claude Code 的核心功能之一，它允许你：

- **自动匹配专业知识**：根据任务类型自动调用对应的专业技能
- **无需记忆命令**：通过自然语言描述即可触发相应功能
- **可扩展性强**：支持创建自定义 Skills 来满足特定需求
- **工作流自动化**：将复杂操作封装为可重复使用的技能包

### 为什么需要这个指南？

Claude Code 的 Skills 系统功能强大，但对于新手来说可能难以理解。本指南旨在：

- 📚 **系统化介绍**：从基础概念到高级用法
- 🎯 **实用示例**：提供真实场景的使用案例
- 🚀 **快速上手**：帮助用户快速掌握核心功能
- 💡 **最佳实践**：分享使用技巧和注意事项

---

## 🌐 网站地址

- **GitHub Pages**：https://ekko7778.github.io/claude-skills-guide/
- **GitHub 仓库**：https://github.com/Ekko7778/claude-skills-guide

---

## 🛠️ 技术栈

本项目使用现代化的前端技术栈构建：

- **Astro 4.x** - 高性能静态网站生成器
- **Tailwind CSS 3.x** - 实用优先的 CSS 框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **GitHub Pages** - 静态网站托管平台

---

## 📂 项目结构

```
claude-skills-guide/
├── src/
│   ├── pages/
│   │   └── index.astro          # 主页入口
│   ├── components/
│   │   ├── Header.astro         # 导航栏组件
│   │   ├── Hero.astro           # Hero 区域组件
│   │   ├── WhatIsSkill.astro    # "什么是 Skills" 区域组件
│   │   ├── ThemeToggle.astro    # 主题切换按钮组件
│   │   └── Footer.astro         # 页脚组件
│   ├── layouts/
│   │   └── BaseLayout.astro     # 基础布局组件
│   └── styles/
│       └── global.css           # 全局样式（含主题变量）
├── public/                      # 静态资源目录
├── astro.config.mjs            # Astro 配置文件
├── tailwind.config.mjs         # Tailwind CSS 配置
└── package.json                # 项目依赖和脚本
```

---

## ✨ 特性

- 🌓 **深色/浅色主题**：支持一键切换，默认深色模式
- 📱 **响应式设计**：完美适配桌面端和移动端
- ⚡ **极速加载**：静态生成，秒开体验
- 🎨 **精美 UI**：精心设计的界面，符合现代设计规范
- ♿ **无障碍访问**：遵循 Web 内容无障碍指南（WCAG）

---

## 📄 许可证

MIT License

---

## 🔗 相关资源

- [Claude Code 官方文档](https://docs.anthropic.com/en/docs/build-with-claude/agent-skills)
- [Astro 文档](https://docs.astro.build)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
