<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form method="POST" action="http://l.loc/login" @submit="checkForm">
              <input type="hidden" name="_token" value="gSKLdYLsBr4HOzjr1cZKoeYuAjdJ395GOrjAwOZu" />
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value
                    required="required"
                    autocomplete="email"
                    autofocus="autofocus"
                    class="form-control"
                    v-model.trim="form.email"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required="required"
                    autocomplete="current-password"
                    class="form-control"
                    v-model="form.password"
                    :class="{'is-invalid': errors.password}"
                  />
                  <span v-show="errors.password" role="alert" class="invalid-feedback">
                    <strong>{{errors.password}}</strong>
                  </span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6 offset-md-4">
                  <div class="form-check">
                    <input type="checkbox" name="remember" id="remember" class="form-check-input" />
                    <label for="remember" class="form-check-label">Remember Me</label>
                  </div>
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                  <router-link :to="{name:'resetPassword'}"  class="btn btn-link">Forgot Your Password?</router-link>
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
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions({
            login: 'auth/login',
        }),
        checkForm(e){
            e.preventDefault()
            this.errors = {}

            if(this.form.password.length < 3){
                this.errors.password = 'Password length must be more 2'
            }else{
              this.login(this.form).then((error) => {
                if(error.status == 200){
                    this.$router.push({name: 'index'});
                }else{
                    this.error = error.status;
                }
              });
            }
        }
    },
    data(){
        return {
            form: {
                email: '',
                password: ''
            },
            errors: {
                login: false,
                password: false
            }
        }
    }
};
</script>