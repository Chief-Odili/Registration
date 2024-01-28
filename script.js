
function checkPassword(){
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var message = document.getElementById('msg');
    if(password === confirmPassword){
        message.textContent = " ";
    }
    else{
        message.textContent = "Password do not match"
    }

}

function numCheck() {
    var phoneNumber = document.getElementById('call').value;
    var numMessage = document.getElementById('num-msg');

    // Validate the phone number format
    var phoneNumberPattern = /^\+234[0-9]{9}$/; // Assumes the format +234*********

    if (phoneNumberPattern.test(phoneNumber)) {
        numMessage.textContent = '';
    } else {
        numMessage.textContent = 'Invalid phone number format';
    }
}

