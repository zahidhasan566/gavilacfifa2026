require('./bootstrap');
require('./validation/index');

import Vue from 'vue'
import App from './views/App'
import router from './router/index';
import store from './store/index'
import {baseurl} from './base_url'
// main origin
Vue.prototype.mainOrigin = baseurl
Vue.prototype.$http = window.axios
const _imgBase = process.env.MIX_APP_BASE ? process.env.MIX_APP_BASE + '/public' : '';
Vue.prototype.$imgBase = _imgBase;
window.__IMG__ = _imgBase;

Vue.prototype.moment = moment
//Multi select
//Vue Multiselect
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)
//Bus to transfer data
export const bus = new Vue();

//Toaster
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'
Vue.use(Toaster, {timeout: 5000})

//moment
import moment from 'moment'





const app = new Vue({
    el: '#app',
    store: store,
    components: {App},
    router,
});
