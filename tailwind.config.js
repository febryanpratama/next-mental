import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary' : "#7828C8",
        'secondary' : "#FCEFF8",
        'purple' : "#463E8B",
        'grey' : "#F6F6F6",
        'whitesmoke': "#efeaec"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "light",
  })],
}
