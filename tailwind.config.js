const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      'sans': ['"Inter var"', ...defaultTheme.fontFamily.sans],
      'mono': ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono]
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}