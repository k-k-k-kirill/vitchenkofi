import Vue from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import * as vanta from './assets/scripts/background/vanta.waves.min' // eslint-disable-line

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
