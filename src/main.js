import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './assets/sass/style.scss'
import VueCookies from 'vue-cookies'
require('electron-cookies')
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueCookies)
