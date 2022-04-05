// Password Validator

function checkCredentials(){
    let userInput = document.getElementById('user-box').value;
    let passInput = document.getElementById('password-box').value;

    if (passwordPass(userInput, passInput)){
        const userLogin = [userInput, passInput];
        console.log(`User: ${userLogin[0]} | Pass: ${userLogin[1]}`);
        console.log('The password is valid.')
    }
    else {
        alert('The username or password is not valid. Please try again.');
    }
}

function passwordPass(userInput, passInput) {
    const specialChara = /[`!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?~]/;
    
    if (specialChara.test(userInput)){
        console.log('Username may not contain a special symbol.')
        return false;
    }
    if (!specialChara.test(passInput)) {
        console.log('Password does not contain a symbol.')
        return false;
    }
    if (!/\d/.test(passInput)){
        console.log('Password does not contain a number.')
        return false;
    }
    if (!/[A-Z]/.test(passInput) && /[a-z]/.test(passInput)){
        console.log('Password does not contain a mix of capital and lowercase letters.')
        return false;
    }
    if  (passInput.length <= 7 || passInput.includes(' ') || userInput.toLowerCase() === passInput.toLowerCase()){
        console.log('Password is invalid. Password is shorter than 8 characters, has a space or contains the username.');
        return false;
    }
    else    {
        return true;
    }
}