import router from "./app/routes"
import store from './app/vuex'
import i18n from './locale/i18n'

window.Vue = require('vue')

window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.component('app', require('./app/layout/App.vue').default)

store.commit('auth/checkToken')

new Vue({
    i18n,
    el: '#app',
    router,
    store,
})