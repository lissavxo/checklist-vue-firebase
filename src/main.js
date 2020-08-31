import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from './plugins/firebase'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(firebase)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
