import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './components'
import '@/api/index'
// 全局消息提示
import Message from '@/components/global/message/index'

Vue.config.productionTip = false
Vue.prototype.$message = Message
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
