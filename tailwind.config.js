module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        barriecito: ['Barriecito', 'cursive'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(#ff3131, #ff914d)',
        'white-gradient': 'linear-gradient(#ffffff, #808080)',
      },
      colors: {
        primary: '#ff3131',
        secondary: '#ff914d',
        accent: '#e3342f',
        neutral: '#f5f5f5',
      },
    },
  },
  plugins: [
    function ({ addUtilities, e, theme, variants }) {
      addUtilities(
        {
          '.text-gradient': {
            background: 'linear-gradient(#ff3131, #ff914d)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            padding: '2px 0px',
          },
          '.text-gradient-white': {
            background: 'linear-gradient(90deg, #ffffff, #808080)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            padding: '2px 0px',
          },
          'border-primaryGradient': {
            borderColor: 'transparent',
            borderImage: 'linear-gradient(#ff3131, #ff914d) 1',
          },
        },
        ['responsive', 'hover'],
      );
    },
  ],
};
