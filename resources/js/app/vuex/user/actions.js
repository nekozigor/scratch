export const getActions = ({commit}, form) => {
    return axios.get('/api/user/action').then(response => {
        commit('setActions', response.data)
        return response
    })
    .catch(error => {
        return error.response
    })
}