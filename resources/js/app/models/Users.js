export default class User {

    constructor(){
        this.hasError = false
    }

    getAttrs(){
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    }

    getErrors(){
        return this.errors
    }

    clearErrors(){
        this.errors = this.getAttrs()
        return this
    }

    validatePassword() {
        if (this.form.password.length < 3) {
            this.hasError = true
            this.errors.password = "Password length must be more 2"
        }
        return this
    }

    validatePasswordConfirmation() {
        if (this.form.password !== this.form.password_confirmation) {
            this.errors.password_confirmation = "Wrong password"
        }
        return this
    }

    validateLogin() {
        this.clearErrors().validatePassword()
        return !this.hasError
    }

    load(form){
        this.form = form
        return this
    }

    getForm(){
        return this.form
    }

    validateRegister() {
        this.clearErrors().validatePassword().validatePasswordConfirmation()
        return !this.hasError
    }
}