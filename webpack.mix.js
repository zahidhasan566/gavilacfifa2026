const mix = require('laravel-mix');

// MIX_APP_BASE=/fifa2026 for local WAMP, empty for production root domain
const appBase = process.env.MIX_APP_BASE || '';
const publicPath = appBase ? `${appBase}/public/` : '/';

mix.js('resources/js/app.js', 'public/js')
    .vue({ version: 2 })
    .postCss('resources/css/app.css', 'public/css')
    .webpackConfig({
        output: {
            publicPath: publicPath,
        },
    });

