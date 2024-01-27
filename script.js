function numCheck(){
    var num = document.getElementById('call');
    var valid = num.checkValidity();
    if(valid){
        document.getElementById('num-msg').innerHTML = " ";
    }
    else{
        document.getElementById('num-msg').innerHTML = "Invalid Phone Number!"
    }
}

function checkPassword(){
    var pass = document.getElementById('password');
    var cpass = document.getElementById('confirm-password');
    if(pass != cpass){
        document.getElementById('msg').innerHTML = "Password do not match";
    }
    else{
        document.getElementById('msg').innerHTML = " ";
    }


}