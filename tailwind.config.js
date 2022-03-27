const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      cover: 'cover',
      contain: 'contain',
      auto: 'auto',
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
        'aid-light-white': '#F8FAFF',
        'aid-red': '#ED3B38',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        75: '18.75rem',
      },
      maxHeight: {
        75: '18.75rem',
      },
      height: {
        75: '18.75rem',
      },
      margin: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      padding: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        full: '100%',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['first', 'last', 'peer-checked', 'disabled'],
      borderOpacity: ['first', 'last', 'peer-checked', 'disabled'],
      borderRadius: ['first', 'last', 'peer-checked', 'disabled'],
      borderStyle: ['first', 'last', 'peer-checked', 'disabled'],
      borderWidth: ['first', 'last', 'peer-checked', 'disabled'],
      backgroundColor: ['first', 'last', 'peer-checked', 'disabled'],
      backgroundOpacity: ['first', 'last', 'peer-checked', 'disabled'],
      margin: ['first', 'last', 'peer-checked', 'disabled'],
      padding: ['first', 'last', 'peer-checked', 'disabled'],
      opacity: ['first', 'last', 'peer-checked', 'disabled'],
      textColor: ['first', 'last', 'peer-checked', 'disabled'],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('peer-checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`peer-checked${separator}${className}`) // escape class
          const selector = 'input[type="radio"]' // your input selector. Could be any
          return [`${selector}:checked ~ .${eClassName}`] // ~ - CSS selector for siblings
        })
      })
    }),
    require('@tailwindcss/forms'),
  ],
}
