export const setToken = (state, token) => {
    //localforage.setItem('authtoken', token)
    setAxios(token)
    state.token = token
}

export const unsetToken = (state) => {
    //localforage.removeItem('authtoken')
    setAxios(null)
    state.token = null
}

export const checkToken = (state) => {
    setAxios(state.token)
}

const setAxios = (token) => {
    if(null != token){
        token = 'Bearer ' + token
    }
    window.axios.defaults.headers.common['Authorization'] = token
}