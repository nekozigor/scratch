export default {
    state: {
        locale: 'en'
    },
    getters: {
        current(state){
            return state.locale
        }
    },
    mutations: {
        update(state, lang) {
            state.locale = lang
        }
    },
    actions: {
        change({ commit }, lang) {
            commit('update', lang)
        }
    },
    namespaced: true,
}