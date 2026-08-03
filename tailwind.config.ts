import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F0E8',
        surface: '#EDE7DA',
        ink: '#1A1410',
        muted: '#7B6A59',
        accent: '#9E8060',
        rule: '#C8BAA4',
        hover: '#E8DFD0',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        script: ['var(--font-script)', 'cursive'],
        serif: ['Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', 'Georgia', 'serif'],
        sans: ['system-ui', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
