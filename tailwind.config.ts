import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "var(--color-1)",
        color2: "var(--color-2)",
        color3: "var(--color-3)",
        "white-hover": "var(--white-hover)",
      },
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
      },
      animation: {
        buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out',
      },
      keyframes: {
        buttonheartbeat: {
          '0%': {
            'box-shadow': '0 0 0 0 theme("colors.red.500")',
            transform: 'scale(1)',
          },
          '50%': {
            'box-shadow': '0 0 0 7px theme("colors.red.500/0")',
            transform: 'scale(1.05)',
          },
          '100%': {
            'box-shadow': '0 0 0 0 theme("colors.red.500/0")',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
