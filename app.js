const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
form.addEventListener('submit',(e)=>{
    console.log('pressed');
    e.preventDefault();
     checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue= password.value.trim();
    const password2value = password2.value.trim();
    if(usernameValue ===''){
        setErrorFor(username,'Username could not  be blank');
    } 
    else{
        setSuccessFor(username);
    }
    if(emailvalue ===''){
        setErrorFor(email,'Email could not be blank');
    }else if(!isEmail(emailvalue)){
        setErrorFor(email, 'Invalid Email address');
    }
    else{
        setSuccessFor(email);
    }
    
    if(passwordvalue===''){
        setErrorFor(password,'Password is required');
    }else if(passwordvalue.length < 6){
        setErrorFor(password, 'Password should be at least 6 chars');
    }
    else{
        setSuccessFor(password);
    }
    if(password2value===''){
        setErrorFor(password2,'Password is required');
    }else if(password2value !== passwordvalue){
        setErrorFor(password2, 'Password does not match!');
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
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

document.getElementById('username').addEventListener('keypress',function(e){
    if (isPersian(e.charCode))
    setSuccessFor(username);
    else
    setErrorFor(username,'Username could not be in other language except persian');
       });

    function isPersian(charCode){
      return (charCode >= 1776 && charCode <= 1785) 
    }