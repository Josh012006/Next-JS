import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fadeOut": {
          '0%': { "opacity": "1" },
          '50%': { "opacity": "1" },
          '100%': { "opacity": "0" },
        },
      },
      animation: {
        "fadeOut": 'fadeOut 2.5s ease-out forwards',
      },
      boxShadow: {
        'custom': '20px -20px 30px 10px inset #041a2f',
        'custom-1': '20px 20px 30px 30px #041a2f',
        'custom-2': '20px 20px 30px 30px #b7c4d0',
      },
    },
  },
  plugins: [],
};
export default config;
