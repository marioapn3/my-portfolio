/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Text
        ink: {
          DEFAULT: '#f4f4f5',
          muted: '#a1a1aa',
          faint: '#71717a',
        },
        // Surfaces
        surface: {
          DEFAULT: '#141821',
          2: '#0f131a',
          3: '#1a1f2a',
        },
        // Borders
        line: {
          DEFAULT: 'rgba(255,255,255,0.10)',
          strong: 'rgba(255,255,255,0.18)',
        },
        // Accent — single brand color, used sparingly
        accent: {
          DEFAULT: '#2dd4bf',
          bright: '#5eead4',
          dim: '#0d9488',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.25)',
        lift: '0 2px 4px rgba(0,0,0,0.45), 0 18px 40px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(45,212,191,0.35), 0 8px 30px rgba(45,212,191,0.15)',
      },
    },
  },
  plugins: [
    tailwindScrollbar,
    require('@tailwindcss/typography'),
  ],
}
