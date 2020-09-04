const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
    'popper.js/dist/umd/popper.js': ['Popper']
})
mix.js('resources/js/app.js', 'public/js')
.sass('resources/sass/app.scss', 'public/css')
.version()



   .js('resources/js/Empleados/lista_empleado.js', 'public/js')
   .js('resources/js/Empleados/alta_empleado.js', 'public/js')
   .js('resources/js/Empleados/editar_empleado.js', 'public/js')



