<template>
    <div>
        <div style="position:absolute;right:0;top:0;" v-if="authenticated" @click="onLogout">Logout</div>
        <login-header v-if="!authenticated"></login-header>
        <router-view></router-view>
    </div>
</template>

<script>
import LoginHeader from '../views/Header'
import {mapActions, mapGetters} from 'vuex'

export default {
    components: {LoginHeader},
        methods: {
        ...mapActions({
            logout: 'auth/logout',
        }),
        onLogout(){
            this.logout().then(() => 
                this.$router.push({name: 'login'})
            )
        }
    },
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated'
        })
    }
}
</script>
