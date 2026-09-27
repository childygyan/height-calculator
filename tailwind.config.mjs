/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Fresh identity (2026-09-27): emerald/teal "growth" primary replaces
        // the old blue. Every `brand-*` utility across the site follows.
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Plus Jakarta Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        'soft-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft': '0 4px 16px 0 rgba(0, 0, 0, 0.04)',
        'soft-md': '0 8px 24px 0 rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 16px 32px 0 rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
