/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        mono: ['"Fira Code"', '"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s infinite',
        'border-pulse': 'border-pulse 2s infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))' },
          '50%': { opacity: 0.8, filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.8))' },
        },
        'border-pulse': {
          '0%, 100%': { borderColor: 'rgba(34, 211, 238, 0.3)', boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)' },
          '50%': { borderColor: 'rgba(34, 211, 238, 0.8)', boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)' },
        },
      }
    },
  },
  plugins: [],
}
