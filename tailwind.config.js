/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#101012',
          soft: '#3d3d44',
          mute: '#6f6f78',
        },
        paper: {
          DEFAULT: '#ffffff',
          sand: '#f6f5f2',
          mist: '#eeeeec',
          line: '#e4e2dd',
        },
        accent: {
          DEFAULT: '#0e5f4b',
          deep: '#0a4636',
          tint: '#e5efeb',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
