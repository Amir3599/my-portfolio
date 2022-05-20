
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hamburger-bg': 'url("/src/assets/floating-cogs.jpg")',
        'homebg': 'url("/src/assets/bgIMG.png")',
      },
      screens: {
        'maxlg': { 'max': '900px' },
        'max2lg': { 'max': '1200px' },
        'maxm': { 'max': '450px' },
        'minlg': { 'min': '900px' },
      },
      colors: {
        'bg-navbar': 'rgba(255, 255, 255, 0.25)',
        'borderC': 'rgba(255, 255, 255, 0.18)',
      },
      boxShadow: {
        'badge': '0 0 20px rgba(0, 0, 0, 0.1)',
      },
    },
    plugins: [],
  }
}