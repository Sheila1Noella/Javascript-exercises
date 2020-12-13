const form = document.getElementById('form');
const username = document.getElementById('username');
const Email = document.getElementById('e_mail');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});
function checkInputs() {
    const usernamevalue = username.value.trim();
    const emailvalue = Email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();
// if (usernamevalue === '' || emailvalue === '' || !isEmail(emailvalue) || passwordvalue === '' || password2value === '' || passwordvalue !== password2value) {
//     setErrorFor(username,'username cannot be blank');
//     setErrorFor(Email, 'email must not be blank');
//     setErrorFor(password,'password cannot be blank');
//     setErrorFor(password2,'Passwords does not match');

// }
// else{
//     setSuccessFor(username);
//     setSuccessFor(Email);
//     setSuccessFor(password);
//     setSuccessFor(password2);

// }

    if (usernamevalue === '') {
        //error class
        setErrorFor(username,'username cannot be blank');
    }
    else{
        //success class
        setSuccessFor(username);
    }
    if (!isEmail(emailvalue)) {
        setErrorFor(Email, 'email must not be blank');
    } 
    else {
        setSuccessFor(Email);
    }
    
    if (passwordvalue === '') {
        setErrorFor(password,'password cannot be blank');
        }
        else{
            setSuccessFor(password);
        }
        if (password2value === '') {
            setErrorFor(password2,'password cannot be blank');
        }
        else if(passwordvalue !== password2value){
            setErrorFor(password2,'Passwords does not match');
        }
        else{
            setSuccessFor(password2);
        }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;

    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}