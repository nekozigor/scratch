<template>
  <div>
    <div style="position:absolute;right:0;top:0;" v-if="authenticated" @click="onLogout">Logout</div>
    <login-header v-if="!authenticated"></login-header>
    <div class="lang-dropdown">
      <select v-model="lang">
        <option v-for="(lang, i) in languageArray" :key="`lang${i}`" :value="lang">{{ lang }}</option>
      </select>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import LoginHeader from "../views/Header";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { LoginHeader },
  methods: {
    ...mapActions({
      logout: "auth/logout",
      langChange: "locale/change",
    }),
    onLogout() {
      this.logout().then(() => this.$router.push({ name: "login" }));
    },
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      currentLocale: "locale/current",
    }),
    lang: {
      set(lang) {
        this.langChange(lang);
      },
      get() {
        this.$i18n.locale = this.currentLocale  
        return this.currentLocale;
      },
    },
  },
  data() {
    return {
      languageArray: ["en", "ru"],
    };
  },
};
</script>
