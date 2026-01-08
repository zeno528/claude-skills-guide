# Claude Skills Guide - 项目配置文件

> 本文件定义了 Claude Skills Guide 项目的特定规则和流程
> 与全局配置 (~/.claude/CLAUDE.md) 配合使用

---

## 📁 项目概述

**项目类型**：前端项目（静态网页）
**项目用途**：个人项目
**团队规模**：个人项目
**仓库地址**：https://github.com/Ekko7778/claude-skills-guide
**部署地址**：https://ekko7778.github.io/claude-skills-guide/

---

## 🛠️ 技术栈

### 前端技术
- **框架**：纯 HTML（无框架）
- **样式方案**：Tailwind CSS（通过 CDN）
- **字体**：Inter（主字体）+ JetBrains Mono（代码字体）
- **构建方式**：无需构建，直接使用 HTML

### 部署
- **平台**：GitHub Pages
- **分支**：main
- **自动部署**：推送到 main 分支后自动触发

---

## 📂 项目结构

```
index/
├── .claude/
│   └── CLAUDE.md       # 项目配置文件（本文件）
├── index.html          # 主网页文件
└── README.md           # 项目说明文档
```

---

## 🔄 开发流程

### 代码修改流程
1. 用户提出需求
2. 使用 Read/Edit/Write 工具修改代码
3. **使用 Chrome DevTools 进行完整验证**（必须）
4. 验证通过后等待用户指令
5. 用户确认后才执行 `git push`

### Git 工作流
- **分支策略**：单分支（main）
- **提交规范**：使用 commit skill 自动生成中文提交信息
- **推送规范**：**必须等待用户明确指令后才推送**

---

## ⚠️ 项目特定约束（重要）

### 代码推送规则
> **最高优先级规则**：修改完代码后，没有用户的明确指令，绝对不可以自动推送

**正确流程**：
```
修改代码 → Chrome DevTools 验证 → 等待用户指令 → 用户确认后推送
```

**错误流程**：
```
❌ 修改代码 → Chrome DevTools 验证 → 直接推送
```

### 图片处理规则
> **强制规则**：当用户提供图片时，必须先使用视觉 MCP 工具查看图片，然后再处理问题

**触发条件**（任一满足即触发）：
- 用户说"看图"、"看截图"、"查看图片"
- 用户在输入框粘贴了图片
- 用户消息中包含图片文件

**处理流程**：
```
用户发送图片 → 使用视觉 MCP 工具分析图片 → 根据分析结果处理问题
```

**可用工具**（根据图片类型选择）：
- **UI/设计分析**：`mcp__zai-mcp-server__analyze_image`
- **文字提取**：`mcp__luma-mcp__analyze_image`
- **数据图表**：`mcp__zai-mcp-server__analyze_data_visualization`
- **错误诊断**：`mcp__zai-mcp-server__diagnose_error_screenshot`
- **视频分析**：`mcp__zai-mcp-server__analyze_video`

**禁止行为**：
- ❌ 未经图片分析直接猜测问题
- ❌ 忽略图片直接处理文字描述
- ❌ 跳过图片分析步骤

### 质量保证规则
> **必须验证**：每次代码修改后，必须使用 Chrome DevTools 进行完整验证

**验证内容**：
1. 页面正常加载，无 404 错误
2. 控制台无错误信息（警告可接受）
3. 视觉样式正确（深色/浅色主题）
4. 文字清晰可读
5. 响应式布局正常
6. 交互功能正常（主题切换、导航等）

**验证工具**：
- `mcp__chrome-devtools__navigate_page`
- `mcp__chrome-devtools__take_snapshot`
- `mcp__chrome-devtools__list_console_messages`
- `mcp__chrome-devtools__take_screenshot`

---

## 📐 代码规范

### HTML 规范
- 使用语义化标签
- Tailwind 类名顺序：布局 → 间距 → 颜色 → 其他
- 代码缩进：2 空格

### 主题规范
- **默认主题**：深色模式
- **主题切换**：通过 `html` 元素的 `dark` 类控制
- **样式覆盖**：浅色主题使用 `html:not(.dark)` 选择器
- **保持深色模式不变**：深色模式样式必须保持原有样式，不改动

### 颜色使用
```css
/* 深色模式（默认，保持不变） */
.text-gray-400  /* 辅助文字 */
.text-gray-300  /* 次要文字 */
.text-gray-100  /* 主要文字 */

/* 浅色模式（通过 CSS 覆盖） */
html:not(.dark) .text-gray-400 { color: #4b5563; }
html:not(.dark) .text-gray-300 { color: #374151; }
```

### JavaScript 规范
- 使用 ES6+ 语法
- 函数命名：camelCase
- 添加详细中文注释
- 分号：使用
- 引号：单引号

---

## 🚨 常见问题

### Q：修改完代码后可以直接推送吗？
**A：不可以！** 必须等待用户的明确指令。

### Q：如何验证代码修改？
**A：** 必须使用 Chrome DevTools 进行完整验证：
```javascript
// 1. 打开页面
mcp__chrome-devtools__navigate_page({ url: "https://ekko7778.github.io/claude-skills-guide/" })

// 2. 检查控制台
mcp__chrome-devtools__list_console_messages()

// 3. 截图验证
mcp__chrome-devtools__take_screenshot({ fullPage: true })
```

### Q：深色模式的样式可以改吗？
**A：** 尽量保持不变。如需修改，必须确保深色模式完全保持原有效果。

---

## 📚 相关资源

- **GitHub 仓库**：https://github.com/Ekko7778/claude-skills-guide
- **GitHub Pages**：https://ekko7778.github.io/claude-skills-guide/
- **Tailwind CSS 文档**：https://tailwindcss.com/docs

---

*配置生成时间：2025-01-08*
*配置版本：1.1*
*最后更新：添加图片处理强制规则*
