const menu = document.querySelector('#mobile-menu');
const menulink = document.querySelector('.menu');
const navLogo = document.querySelector('.logo');

// show mobile menu

const mobileMenu = () => {

	menu.classList.toggle('is-active');
	menulink.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


// highlight menu

const highlightMenu = () =>{

	const highlight = document.querySelector('.highlight');
	const homeMenu = document.querySelector('#home-page');
	const aboutMenu = document.querySelector('#about-page');
	const servicesMenu = document.querySelector('#services-page');
	const contactMenu = document.querySelector('#contact-page');
	let scrollPos = window.scrollY;



	if (window.innerWidth > 960 && scrollPos < 600) {

		homeMenu.classList.add('highlight');
		aboutMenu.classList.remove('highlight');
		return;
	}else if (window.innerWidth > 960 && scrollPos < 1400) {

		aboutMenu.classList.add('highlight');
		homeMenu.classList.remove('highlight');
		servicesMenu.classList.remove('highlight');
		return;
	}else if (window.innerWidth > 960 && scrollPos < 2345) {

		servicesMenu.classList.add('highlight');
		aboutMenu.classList.remove('highlight');
		contactMenu.classList.remove('highlight');
		return;
	}else if (window.innerWidth > 960 && scrollPos < 2800) {

		contactMenu.classList.add('highlight');
		servicesMenu.classList.remove('highlight');
		
		return;
	}else if (window.innerWidth > 960 && scrollPos < 3345) {

		contactMenu.classList.remove('highlight');		
		return;
	}

	if ((highlight && window.innerWIdth < 960 && scrollPos < 600 || highlight)){

		highlight.classList.remove('highlight');

	}
}


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);



// modal

const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.navbar_btn');
const closeBtn =  document.querySelector('.close-btn');


openBtn.addEventListener('click', () => {

	modal.style.display = 'block';

});

closeBtn.addEventListener('click', () => {

	modal.style.display = 'none';

});


window.addEventListener('submit', (e) => {

	modal.display = 'none';
});




// form validation

const form =  document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');


// show error message

function showError(input, message){

	const formValidation = input.parentElement;
	formValidation.className = 'form-validation error';

	const errorMessage = formValidation.querySelector('p');
	errorMessage.innerText = message;
}


// event listener

form.addEventListener('submit', (e) => {

	e.preventDefault();

	checkRequired([name, email, password, passwordConfirm]);
	checkLenghth(name, 3, 30);
	checkLenghth(password, 8, 25);
	checkLenghth(passwordConfirm, 8, 25);
	passwordMatch(password, passwordConfirm);

})


// check required 

function checkRequired(inputArr){

	inputArr.forEach(function(input) {

		if (input.value.trim() === '') {

			showError(input, `${getFieldName(input)} is required`);

		}else{

			showValid(input);
		}
	})
}


// show valid message

function showValid(input){

	const formValidation = input.parentElement;
	formValidation.className = 'form-validation valid';
}

// get field name

function getFieldName(input){

	return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}


// check checkLenghth field

function checkLenghth(input, min, max){

	if (input.value.length < min) {

		showError(input, `${getFieldName(input)} must be at least ${min} characters`);
	}else if (input.value.length > max) {

		showError(input, `${getFieldName(input)} must be less than ${max} characters`);
	}
}

// passwor match

function passwordMatch(input1, input2){

	if (input1.value !== input2.value) {

		showError(input2, 'Password is not match');
	}

}


