/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/components/**.{vue}",
    "./app/pages/**.{vue}",
    "./app/app.{vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Anton"],
        //add more font name which you want to use and call in tailwind class like <div class="font-custom">
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
