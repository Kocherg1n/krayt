// JS
import 'jquery'
import './js/'

// SCSS
import './assets/scss/main.scss'

// Vue.js
window.Vue = require('vue');


// Vue components (for use in html)
Vue.component('slider-projects', require('./components/slider-projects.vue').default);

// Vue init

const app = new Vue({
  el: '#app',
});

