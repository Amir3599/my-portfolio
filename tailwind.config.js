module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hamburger-bg': 'url("/src/assets/floating-cogs.jpg")',
      },
      screens: {
        'maxlg': { 'max': '900px' },
        'minlg': { 'min': '900px' },
      },
      colors: {
        'bg-navbar': 'rgba(255, 255, 255, 0.25)',
        'borderC': 'rgba(255, 255, 255, 0.18)',
      },
    },
    plugins: [],
  }
}