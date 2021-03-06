import Vue from 'vue'
//import Element from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

//Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
