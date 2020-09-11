<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form method="POST" action="/register" @submit="checkForm">

              <strong v-show="error" style="color:red">{{error}}</strong>

              <s-input
                v-model.trim="form.name"
                label="Name"
                name="name"
                type="text"
                :autofocus="true"
                autocomplete="name"
                :error="errors.name"
              />

              <s-input
                v-model.trim="form.email"
                label="E-Mail Address"
                name="email"
                type="email"
                autocomplete="email"
                :error="errors.email"
              />

              <s-input
                v-model="form.password"
                label="Password"
                name="password"
                type="password"
                :error="errors.password"
              />

              <s-input
                v-model="form.password_confirmation"
                label="Confirm Password"
                name="password_confirmation"
                type="password"
                :error="errors.password_confirmation"
              />

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
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
import SInput from "./components/Input"
import { mapActions } from "vuex"
import User from "../../models/Users"

let user = new User

export default {
  components: {
    SInput,
  },
  methods: {
    ...mapActions({
      signUp: "auth/signUp",
    }),
    checkForm(e) {
      e.preventDefault();
      if(user.load(this.form).validateRegister()) {
        this.signUp(user.getForm()).then((response) => {
          if (response.status == 200) {
            this.$router.push({ name: "index" })
          } else if(response.status == 422){
            this.error = response.data.message
            for(let x in response.data.errors){
              this.errors[x] = response.data.errors[x][0]
            }
          }
          else {
            this.error = (typeof response.data.error != 'undefined') ? response.data.error : 'Server error'
          }
        })
      }else{
        this.errors = user.getErrors()
      }
    },
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