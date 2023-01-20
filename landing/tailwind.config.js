/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'yellow-500': '#FFC50B',
      'blue-700': '#006AB2',
      "neutral-500": '#909090',
      "neutral-100": '#F3F6F8',
      'white': "#FFFF",
      'black': "0000",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")
]
}
