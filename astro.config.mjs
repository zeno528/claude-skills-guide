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
  // GitHub Pages 子路径配置
  base: '/claude-skills-guide',
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
