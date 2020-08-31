export const setToken = (state, token) => {
    localforage.setItem('authtoken', token);
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    state.token = token;
}

export const unsetToken = (state) => {
    localforage.removeItem('authtoken');
    window.axios.defaults.headers.common['Authorization'] = null;
    state.token = null;
}