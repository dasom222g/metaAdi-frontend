const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'cover': 'cover',
      'contain': 'contain',
      'auto': 'auto',
      '50%': '50%',
      '70%': '70%',
      '80%': '80%',
    },
    extend: {
      colors: {
        'aid-blue': '#BED5FC',
        'aid-purple': '#4738BB',
        'aid-light-purple': '#DCB8FF',
        'aid-yellow': '#F9F871',
        'aid-light-pink': '#F7EBFF',
        'aid-light-blue': '#C6FCED',
        'aid-red': '#ED3B38',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      margin: {
        '30': '7.5rem',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['first', 'last', 'peer-checked'],
      borderOpacity: ['first', 'last', 'peer-checked'],
      borderRadius: ['first', 'last', 'peer-checked'],
      borderStyle: ['first', 'last', 'peer-checked'],
      borderWidth: ['first', 'last', 'peer-checked'],
      backgroundColor: ['first', 'last', 'peer-checked'],
      backgroundOpacity: ['first', 'last', 'peer-checked'],
      margin: ['first', 'last', 'peer-checked'],
      padding: ['first', 'last', 'peer-checked'],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('peer-checked', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => {
              const eClassName = e(`peer-checked${separator}${className}`); // escape class
              const selector = 'input[type="radio"]'; // your input selector. Could be any
              return [`${selector}:checked ~ .${eClassName}`]; // ~ - CSS selector for siblings
          }
        )
      })
    }),
  ],
}

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
