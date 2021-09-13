import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/global.css'

Vue.config.productionTip = false
Vue.use(Elementui)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
