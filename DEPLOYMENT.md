# 部署说明

## Cloudflare Pages 自动构建

本项目使用 Cloudflare Pages 进行自动部署，每次向 `main` 分支推送代码时会自动触发构建。

### 跳过构建的方法

当只修改文档文件（如 README.md）而不希望触发 Cloudflare Pages 构建时，可以在 commit message 中添加以下标记之一：

- `[skip ci]`
- `[ci skip]`
- `[no ci]`
- `[skip cloudflare]`

**示例：**

```bash
# 修改 README 后，使用以下命令提交（不会触发构建）
git add README.md
git commit -m "[文档] 更新 README [skip ci]"
git push
```

### 触发构建的文件

以下文件的修改**会触发** Cloudflare Pages 构建：

- `src/` 目录下的所有文件
- `public/` 目录下的所有文件
- `astro.config.mjs`
- `tailwind.config.mjs`
- `package.json`
- `package-lock.json`

以下文件的修改**不应触发**构建（建议使用 `[skip ci]`）：

- `README.md`
- `.github/` 目录（除工作流文件外）
- 其他文档文件

### 部署地址

- **Cloudflare Pages**: https://claude-skills-guide.pages.dev/
- **GitHub 仓库**: https://github.com/Ekko7778/claude-skills-guide

### 构建配置

- **构建命令**: `npm run build`
- **输出目录**: `dist/`
- **Node.js 版本**: 自动检测
