/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        ragazzibold: ['Ragazzi-Extrabold'],
        ragazzi: ['Ragazzi'],
      }
    },
    colors: {
      'p-blue': '#7BD3EA',
      'p-pink': '#e8acae',
      'p-gray': '#F9F5F6',
      'p-lpink': '#FFDDCC',
      'p-mpink': '#FFCCCC',
      'p-hpink': '#FEBBCC',
      'p-dpink': '#E195AB',
      'p-ddpink': '#c28294',
      'p-yellow': '#FFEECC',
      'p-dwhite': '#f6f6f7',
      'p-white': '#ffffff',
      'd-gray': '#161618',
      'p-dgray': '#a3a3a3',
      // 'p-brown': '#361b1b',
      'p-brown': '#4d2920',
    }
  },
  plugins: [
    "prettier-plugin-tailwindcss",
  ],
}

