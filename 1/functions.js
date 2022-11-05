
function validatePassword(){
    let password = document.getElementById("psw").value
    let confirm_password = document.getElementById("psw2").value;
    let paragraph = document.getElementById("p");
    if (password.length < 8){
        paragraph.innerText = "Password not 8 characters long";
    }
    else if(password != confirm_password) {
        paragraph.innerText = "Passwords do not match";
    } else {
        paragraph.innerText = "Passwords match!";
    }
}