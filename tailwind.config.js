/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--cc-bg) / <alpha-value>)',
        panel: 'rgb(var(--cc-panel) / <alpha-value>)',
        border: 'rgb(var(--cc-border) / <alpha-value>)',
        text: 'rgb(var(--cc-text) / <alpha-value>)',
        muted: 'rgb(var(--cc-muted) / <alpha-value>)',
        accent: {
          blue: 'rgb(var(--cc-blue) / <alpha-value>)',
          teal: 'rgb(var(--cc-teal) / <alpha-value>)',
          purple: 'rgb(var(--cc-purple) / <alpha-value>)',
          green: 'rgb(var(--cc-green) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        panel: '0 0 0 1px rgb(var(--cc-border) / 0.65), 0 10px 30px rgb(0 0 0 / 0.35)',
        glow: '0 0 0 1px rgb(var(--cc-blue) / 0.3), 0 0 24px rgb(var(--cc-blue) / 0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        pulseSoft: 'pulseSoft 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

