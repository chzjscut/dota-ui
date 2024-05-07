import Vue from 'vue'
import App from './App.vue'
import DotaUI from '../packages';
import '../packages/theme-chalk/lib/index.css';

Vue.use(DotaUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
