const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/recommend/app.js', 'public/js/recommend').vue({ version: 2 });

mix.js('resources/js/eshop/app.js', 'public/js/eshop').vue({ version: 2 });
/*
.sass('resources/sass/app.scss', 'public/css')
.copy(
    'node_modules/@fortawesome/fontawesome-free/webfonts',
    'public/webfonts'
);
*/

mix.js('resources/js/admin/app.js', 'public/js/admin').vue({ version: 2 });

module.exports = {
  configureWebpack: {
    externals: {
      vue: "Vue" // Vytvoří globální proměnnou Vue
    }
  }
};
