/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      colors: {
        claude: {
          // 深色主题
          dark: '#09090b',
          card: '#18181b',
          border: '#27272a',
          // 浅色主题
          light: '#fafafa',
          'light-card': '#ffffff',
          'light-border': '#e5e7eb',
          // 品牌色（两种主题通用）
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#f59e0b',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        }
      }
    }
  },
  plugins: [],
}
