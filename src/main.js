import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/css/common.css'
import api from './api/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/dist/css/swiper.css'
import Tabs from './components/tabs'
import BackTop from './components/BackTop'
import './assets/font/iconfont.css'

Vue.use(BackTop);
Vue.use(Tabs);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.prototype.$api =api

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
