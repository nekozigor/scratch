export const login = ({commit}, form) => {
    return axios.post('/api/auth/login', form).then(response => {
        commit('setToken', response.data.access_token)
        return response
    })
    .catch(error => {
        return error.response
    })
}

export const signUp = ({commit}, form) => {
    return axios.post('/api/auth/registration', form)
    .then((response) => {
        commit('setToken', response.data.access_token)
        return response
    })
    .catch((error) => {
        return error.response
    })
}

export const logout = ({commit}) => {
    return commit('unsetToken')
}