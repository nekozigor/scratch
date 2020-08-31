export const setActions = (state, actions) => {
    state.actions = actions
    localforage.setItem('actions', actions)
}