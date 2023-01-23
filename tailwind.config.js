/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_icons: '#002987',
        bg_lightBlue: '#006cf6',
        myPink: '#E63946',
        myLightBlue: '#A8DADC',
        myWhite: 'whitesmoke',
        myGrey:'grey',
      }
    },
    
  },
  plugins: [],
}
