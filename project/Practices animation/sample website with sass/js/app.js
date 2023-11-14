const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar_menu');
const navLog = document.querySelector('#navbar_logo');


// to show mobile menu

const showmobileMenu = () =>{

    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');

};

menu.addEventListener('click', showmobileMenu);


// hidemobile menu
const hidemobilemenu = () => {

    const menuBar = document.querySelector('.is-active');
    if(window.innerWidth <= 786 && menuBar) {

        menu.classList.toggle('is-active');
        menuLink.classList.remove('active');
    }
};

menuLink.addEventListener('click', hidemobilemenu);
navLog.addEventListener('click', hidemobilemenu);



// change header color
const nav = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

options = {

}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if(entry.isIntersecting){

            nav.classList.remove('changeBg');
        }else {
            nav.classList.add('changeBg');
        }

    })
}, options)

observer.observe(hero)




// hightlight mobile menu

const highlight = () => {

    const elem = document.querySelector('.highlight');
    const homeMenu = document.getElementById('home-page');
    const aboutMenu = document.getElementById('about-page');
    const servicesMenu = document.getElementById('services-page');
    let scrollPos = window.scrollY;


    if (window.innerWidth > 960 && scrollPos < 600) {
        
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 1800) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 2235) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;

    }else if (window.innerWidth > 960 && scrollPos < 2800) {
        servicesMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600 || elem)){

        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlight);
window.addEventListener('click', highlight);



// scroll up button

function scrollUp(){

    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');

    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);




// modal-form

const modal = document.querySelector('#email-modal');
const openBtn = document.querySelector('.navbar_btn');
const closeBtn = document.querySelector('.close-btn');


openBtn.addEventListener('click', () => {

    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {

    modal.style.display = 'none';
});

modal.addEventListener('submit', (e) => {

    if(e.target === ''){

        modal.style.display = 'none';
    }
});



// form-validation

const form = document.getElementById('email-modal');
const uname = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm-password');



// show error message
function showError(input, message){

const formValidaton = input.parentElement;
formValidaton.classList = 'form-validation error';

const errorMessage = formValidaton.querySelector('p');
errorMessage.innerText = message;

}

// valid error
function validError(input){
    
    const formValidaton = input.parentElement;
    formValidaton.classList = 'form-validation valid';
}

// check required
function checkRequired(inputArr){

    inputArr.forEach(function (input){

        if(input.value.trim() === ''){

            showError(input, `${getFieldName(input)} is required`);
        }else {

            validError(input);
        }
    })

}

// check lenghth
function checkLenghth(input, min, max){

    if (input.value.length < min) {
        
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);

    }else if (input.value.length > max) {

        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
}

// get field name
function getFieldName(input){
    
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}


// Event listener

window.addEventListener('submit', (e) => {

    e.preventDefault();
    checkRequired([uname, email, password, confirmpassword]);
    checkLenghth(uname, 3, 30);
    checkLenghth(password, 8, 25);
    checkLenghth(confirmpassword, 8, 25);
    passwordMatch(password, confirmpassword);

});


function passwordMatch(input1, input2){

    if(input1.value !== input2.value){

        showError(input2, 'Password is not match!');
    }
}