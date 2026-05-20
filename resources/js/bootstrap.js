window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Prepend app base path to all relative /api/ calls
const _appBase = process.env.MIX_APP_BASE || '';
window.axios.interceptors.request.use(function(config) {
    if (config.url && config.url.startsWith('/api/')) {
        config.url = _appBase + config.url;
    }
    return config;
});

let token = localStorage.getItem('token');

if (token) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    // axios.get('/api/check-expired').then((response)=>{
    //     next();
    // }).catch((error)=>{
    //     next({name : 'Login'});
    // })
} else {
    //  console.log('no token');
}
