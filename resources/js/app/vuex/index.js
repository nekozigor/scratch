import createPersistedState from "vuex-persistedstate";
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import locale from './locale'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: auth,
        user: user,
        locale: locale
    },
    plugins: [createPersistedState()],
})