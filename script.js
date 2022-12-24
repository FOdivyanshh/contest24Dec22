
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confrm = document.getElementById('confirm');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confrm.value.trim();

    if (nameValue === '') {
        setErrorFor(name, 'Please enter your name');
    } else {
        setSuccessFor(name);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Please enter your email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email not valid');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Please enter password');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'atleast one number, one uppercase, lowercase letter, and atleast 8 character');
    }else {
        setSuccessFor(password);
    }

    if (confirmValue ==='') {
        setErrorFor(confrm, 'Please re-enter password');
    } else if (!isConfirm(confirmValue)) {
        setErrorFor(confrm, 'Invalid password');
    }else if (passwordValue != confirmValue) {
        setErrorFor(confrm, 'Passwords does not match');
    } else {
        setSuccessFor(confrm);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password){  
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}

function isConfirm(confirm){  
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}

function saveData(){
let name2=document.getElementById("name").value
let email2=document.getElementById("email").value
let psw=document.getElementById("password").value

let userRecords = new Array()
userRecords=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]

if(userRecords.some((v)=>{return v.email==email2}))
{
    alert("dupliate data")
}

else{
    userRecords.push({
        "name":name2,
        "email":email2,
        "password": psw
    })
    localStorage.setItem("users", JSON.stringify(userRecords))
}

}

function logout()
{
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    window.location.href="index.html"
}