function validate_login(){
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    var error1 = document.getElementById("email_error");
    var error2 = document.getElementById("pass_error");

    if(email.value=="" || pass.value=="")
    {
        if(email.value==""){
            email.style.borderColor="red";
            error1.innerHTML = "Email field cannot be empty !!!";
        }
        else{
            email.style.borderColor="rgba(17, 25, 138, 0.658)";
            error1.innerHTML = "";
        }
        
        if(pass.value==""){
            pass.style.borderColor="red";
            error2.innerHTML = "Password field cannot be empty !!!";
        }
        else{
            pass.style.borderColor="rgba(17, 25, 138, 0.658)";
            error2.innerHTML = "";
        }
        return false;
    }
    else
    {
        email.style.borderColor="rgba(17, 25, 138, 0.658)";
        error1.innerHTML = "";
        pass.style.borderColor="rgba(17, 25, 138, 0.658)";
        error2.innerHTML = "";
        return true;
    }
}