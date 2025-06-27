/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        cyan: {
          DEFAULT: '#00ffff',
        },
        neon: {
          DEFAULT: '#00ff00',
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #001a1a 0%, #000000 100%)',
      },
      boxShadow: {
        neon: '0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.2)',
        cyber: '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
};