let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.setPublicPath('./');
mix.sass('src/scss/style.scss', 'dist/styles');
mix.options({
  postCss: [tailwindcss('./tailwind.config.js')]
})
