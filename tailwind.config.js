module.exports = {
  mode: 'jit',
  purge: [
    './public/*.html',
    './src/**/*.svelte',
    './src/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dc-gray': "#36393f"
      },
      fontFamily: {
        'whitney': ['Whitney', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
