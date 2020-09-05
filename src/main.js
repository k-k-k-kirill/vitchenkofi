import Vue from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'

//Vuex
import {store} from './store/store'

//Prismic
import PrismicVue from 'prismic-vue';
import linkResolver from './link-resolver';

// Router
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
});

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
