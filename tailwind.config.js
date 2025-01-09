/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui'),],
  daisyui: {
    themes: ["light", "dark"], // লাইট এবং ডার্ক থিম অ্যাড করুন
  },
}