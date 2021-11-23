class LoginPage {

    get userName() {
        return $("input[name='username']")
    }

    get password() {
        return $("input[name='password']")
    }

    get signIn(){
        return  $("#signInBtn") 
    }

    get alert(){
        return  $(".alert-danger") 
    }

    get textInfo(){
        return $("p")
    }

    Login(username, password){
        this.userName.setValue(username)
        this.password.setValue(password)
        this.signIn.click()
    }


}

module.exports= new LoginPage()