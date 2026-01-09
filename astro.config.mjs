import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  // 部署配置
  outDir: 'dist',
  build: {
    inlineStylesheets: 'auto',
  },
  // base: '/claude-skills-guide', // GitHub Pages 子路径配置（Cloudflare Pages 不需要）
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
