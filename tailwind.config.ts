import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3EC',
        beige: '#D9CDB8',
        cream: '#F4EFE7',
        charcoal: '#1E1A17',
        walnut: '#5B4333',
        bronze: '#8E735A',
        gold: '#C7A16A',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 20px 80px rgba(27, 20, 15, 0.12)',
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at 20% 20%, rgba(199,161,106,0.12), transparent 22%), radial-gradient(circle at 80% 0%, rgba(91,67,51,0.08), transparent 20%)',
      },
    },
  },
  plugins: [],
};

export default config;
