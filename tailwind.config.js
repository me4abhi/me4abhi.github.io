module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        barriecito: ['Barriecito', 'cursive'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(#ff3131, #ff914d)',
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
        },
        ['responsive', 'hover'],
      );
    },
  ],
};
