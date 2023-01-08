import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import jquery from '/jquery-3.3.1.min.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  jquery,
}).$mount('#app')
