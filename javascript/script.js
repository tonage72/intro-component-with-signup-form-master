const inputFirstName = document.getElementsByName("input-first-name")[0];
const inputLastName = document.getElementsByName("input-last-name")[0];
const inputEmail = document.getElementsByName("input-email")[0];
const inputPassword = document.getElementsByName("input-password")[0];
const buttonClaim = document.querySelector(".button-claim");
let wholeFormValid = true;

buttonClaim.addEventListener('click', e => {
	validateInputs();
	if (wholeFormValid === true) {
		location.reload();
	}
})

function validateInputs() {
	const inputFirstNameValue = document.getElementsByName("input-first-name")[0].value.trim();
	const inputLastNameValue = document.getElementsByName("input-last-name")[0].value.trim();
	const inputEmailValue = document.getElementsByName("input-email")[0].value.trim();
	const inputPasswordValue = document.getElementsByName("input-password")[0].value.trim();

	wholeFormValid = true;

	if(inputFirstNameValue === '') {
		displayError(inputFirstName, 'First name can\'t be blank.')
		wholeFormValid = false;
	} else {
		displaySuccess(inputFirstName);
	}

	if(inputLastNameValue === '') {
		displayError(inputLastName, 'Last name can\'t be blank.')
		wholeFormValid = false;
	} else {
		displaySuccess(inputLastName);
	}

	if(inputEmailValue === '') {
		displayError(inputEmail, 'Email can\'t be blank.')
	} else if (!isEmail(inputEmailValue)) {
		displayError(inputEmail, 'Not a valid email.')
		wholeFormValid = false;
	} else {
		displaySuccess(inputEmail);
	}

	if(inputPasswordValue === '') {
		displayError(inputPassword, 'Password can\'t be blank.')
		wholeFormValid = false;
	} else {
		displaySuccess(inputPassword);
	}
}

function displayError(field, message) {
	const inputFrame = field.parentElement;
	const small = inputFrame.querySelector('small');
	inputFrame.className = 'input-frame error';
	small.innerText = message;
}

function displaySuccess(field) {
	const inputFrame = field.parentElement;
	inputFrame.className = 'input-frame success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}