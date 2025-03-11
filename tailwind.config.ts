import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'donation-pulse': 'donation-pulse 2s infinite',
        'donation-shine': 'donation-shine 3s infinite',
        wave: 'wave 2s ease-in-out infinite',
      },
      keyframes: {
        'donation-pulse': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)',
            transform: 'scale(1.05)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)',
            transform: 'scale(1)',
          },
        },
        'donation-shine': {
          '0%': { left: '-100%' },
          '20%': { left: '150%' },
          '100%': { left: '150%' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
