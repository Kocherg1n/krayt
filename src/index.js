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
import {Carousel3d, Slide} from 'vue-carousel-3d';
Vue.use(Carousel3d);

const app = new Vue({
  el: '#app',
  data: {
    slides: 7
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
});

