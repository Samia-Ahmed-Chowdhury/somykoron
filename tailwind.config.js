/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
         'primary_color':'#F17350',
         'paragraph_color':'#666666'
        },
        backgroundImage: {
          bgColor: 'linear-gradient(164deg, rgba(216, 64, 45, 0.10) 0%, rgba(251, 33, 9, 0.10) 100%)',
       btnBg:'linear-gradient(162deg, #F17350 20.74%, #FC47BE 100%);'
        }
    },
  },
  plugins: [require("daisyui")],
}