import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  // GitHub Pages 部署配置
  outDir: 'dist',
  build: {
    inlineStylesheets: 'auto',
  },
  // 如果部署到 GitHub Pages 子路径，取消下面注释
  // base: '/claude-skills-guide',
  // vite: {
  //   build: {
  //     assetsInlineLimit: 0,
  //   },
  // },
});
