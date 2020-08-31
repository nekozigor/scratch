import router from "./app/routes"
import localforage from 'localforage';
import store from './app/vuex'

window.localforage = localforage
localforage.config({
    driver: localforage.LOCALSTORAGE,
    storeName: 'scratch'
});

window.Vue = require('vue')

window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.component('app', require('./app/layout/App.vue').default)

localforage.getItem('authtoken').then((token) => {
    store.commit('auth/setToken', token)

    new Vue({
        el: '#app',
        router,
        store,
    })
})