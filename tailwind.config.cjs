/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "0%, 100%": {
            "background-color": "#000",
            opacity: 1,
          },
          "50%": {
            "background-color": "#fff",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
