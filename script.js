const isValidEmail = (email='') => {
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(email);
}
const form = document.querySelector('.hero-form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.querySelector('#email');
    const error = form.querySelector('.form-error');
    if(isValidEmail(email?.value)){
        error.classList.remove('error');
        email.value='';
    }
    else
        error.classList.add('error');
});
const formac = document.querySelector('.form-ac');
formac.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.querySelector('#email1');
    const error = formac.querySelector('.form-error');
    if(isValidEmail(email?.value)){
        error.classList.remove('error');
        email.value='';
    }
    else
        error.classList.add('error');
});