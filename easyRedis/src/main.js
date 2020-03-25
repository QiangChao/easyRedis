// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import i18n from './i18n/i18n'
import router from './router'
import bus from './bus'
import util from './util'
import storage from './storage'

Vue.prototype.$bus = bus;
Vue.prototype.$util = util;
Vue.prototype.$storage = storage;

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
