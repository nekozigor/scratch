import store from '../vuex';

export default (to, from, next) => {
    if(to.meta.auth !== false && !store.getters['auth/authenticated']){
        next({name: 'login'});
    }else{
        next();
    }
}