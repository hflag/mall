import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Swipe, SwipeItem} from 'mint-ui'

Vue.config.productionTip = false
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
