import Vue from 'vue';
import App from './App.vue';
import QuickInput from "../src/index";
Vue.use(QuickInput);

new Vue({
  el: '#app',
  render: h => h(App)
})
