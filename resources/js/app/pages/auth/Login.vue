<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{$t('login')}}</div>
          <div class="card-body">
            <form method="POST" action="/login" @submit="checkForm">

              <strong v-show="error" style="color:red">{{error}}</strong>
              
              <s-input v-model.trim="form.email" 
              label="E-Mail Address" 
              name="email" 
              type="email" 
              :autofocus="true"
              autocomplete="email"
              :error="errors.email"
              />

              <s-input v-model="form.password"
              label="Password" 
              name="password" 
              type="password"
              :error="errors.password"
              />
              <div class="form-group row">
                <div class="col-md-6 offset-md-4">
                  <div class="form-check">
                    <input type="checkbox" name="remember" id="remember" class="form-check-input" />
                    <label for="remember" class="form-check-label">{{$t("Remember Me")}}</label>
                  </div>
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                  <router-link
                    :to="{name:'resetPassword'}"
                    class="btn btn-link"
                  >Forgot Your Password?</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import SInput from "./components/Input"
import User from "../../models/Users"

let user = new User

export default {
  components: {
    SInput
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    checkForm(e) {
      e.preventDefault()

      if(user.load(this.form).validateLogin()){
        this.login(user.getForm()).then((response) => {
          if (response.status == 200) {
            this.$router.push({ name: "index" })
          } else {
            this.error = response.data.error
          }
        })
      }else{
        this.errors = user.getErrors()
      }
    }
  },
  data() {
    return {
      form: user.getAttrs(),
      errors: user.getAttrs(),
      error: false
    };
  },
};
</script>