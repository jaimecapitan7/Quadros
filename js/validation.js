const submit = document.querySelector('#submit-btn');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const message = document.querySelector('#message');
const messageError = document.querySelector('#messageError');
const messageForm = document.querySelector('#message-form');

const validateEmail = () => {
    const emailValue = email.value.trim();
    const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    emailError.innerText = "";

    if( !emailValue ) {
        emailError.innerText = '*Email is required*';
    } 
    else if( !emailValidator.test(emailValue) ) {
        emailError.innerText = '*Please enter a valid email*';
    }

    
}
const validateMessage = () => {
    const messageValue = message.value;
    messageError.innerText = "";

    if( !messageValue ) {
        messageError.innerText = '*Message is required*';
    } 

}

submit.addEventListener(
    'click',
    (e) => {
        e.preventDefault();


        validateEmail();
        validateMessage();
        // messageForm.reset();

    }
)