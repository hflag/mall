import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Swipe, SwipeItem} from 'mint-ui'

Vue.config.productionTip = false
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)

// 用来做事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
