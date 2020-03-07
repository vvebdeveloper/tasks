function validateFname() {
    var fname = document.getElementById("fname").value;
    if (/^[a-zA-Z0-9]*$/.test(fname) == false) {
        displayError("You cannot use special characters for name and surname!!!");
        return false;
    } else {
        displayError("");
        return true;
    }
}

function displayError(message) {
    document.getElementById("errorBox").innerHTML = message;

}

function validateUname() {
    var uname = document.getElementById("uname").value;
    if (/^[a-zA-Z_\-]+$/.test(uname) == false) {
        displayError("There can not be a blank in username!!!");
        return false;

    } else {
        displayError("");
        return true;

    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        displayError(" Email format should be xxx@xxx.xxx !!!");
        return false;
    } else {
        displayError("");
        return true;
    }
}

function validateAdress() {
    var adress = document.getElementById("adress").value;
    if (/^[a-zA-Z]{0,90}$/.test(adress) == false) {
        displayError("adress should be 1-90 characters!!!");
        return false;
    } else {
        displayError("");
        return true;
    }

}

function validatePassword() {
    var pw = document.getElementById("pw").value;
    if (/^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/.test(pw) == false) {
        displayError("At least 10 charachter and has to include 1 capital,1 speacial,1 number !!!");
        return false;
    } else {
        displayError("");
        return true;
    }
}

function revalidatePassword() {
    var rpw = document.getElementById("rpw").value;
    var pw = document.getElementById("pw").value;
    if (pw != rpw) {
        displayError("passwords dont match!!!");
        return false;
    } else {
        displayError("");
        return true;
    }
}