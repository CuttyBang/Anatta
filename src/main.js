import "./main.scss"
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueCarousel from 'vue-carousel';


Vue.use(VueCarousel);
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App),
});
