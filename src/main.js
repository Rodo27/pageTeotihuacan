import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFacebookPage from 'vue-facebook-page'


import Flipbook from 'flipbook-vue'


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueFacebookPage, );
Vue.use(Flipbook);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
