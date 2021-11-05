module.exports = {
  mode: "jit",
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'alexandre': "#fdb300"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
