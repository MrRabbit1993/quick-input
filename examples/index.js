import Vue from 'vue';
import App from './App.vue';
import QuickInput from "../src/index";
import BaseInput from "../src/index";
Vue.use(QuickInput,BaseInput);

new Vue({
  el: '#app',
  render: h => h(App)
})
