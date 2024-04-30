const inputFirstName = document.getElementsByName("input-first-name")[0];
const inputLastName = document.getElementsByName("input-last-name")[0];
const inputEmail = document.getElementsByName("input-email")[0];
const inputPassword = document.getElementsByName("input-password")[0];
const buttonClaim = document.querySelector(".button-claim");

buttonClaim.addEventListener('click', e => {
	validateInputs();
})

function validateInputs() {
	const inputFirstNameValue = document.getElementsByName("input-first-name")[0].value.trim();
	const inputLastNameValue = document.getElementsByName("input-last-name")[0].value.trim();
	const inputEmailValue = document.getElementsByName("input-email")[0].value.trim();
	const inputPasswordValue = document.getElementsByName("input-password")[0].value.trim();

	if(inputFirstNameValue === '') {
		displayError(inputFirstName, 'First name can\'t be blank.')
	}

	if(inputLastNameValue === '') {
		displayError(inputLastName, 'Last name can\'t be blank.')
	}

	if(inputEmailValue === '') {
		displayError(inputEmail, 'Email can\'t be blank.')
	}

	if(inputPasswordValue === '') {
		displayError(inputPassword, 'Password can\'t be blank.')
	}
}

function displayError(input, message) {
	const inputFrame = input.parentElement;
	const small = inputFrame.querySelector('small');
	inputFrame.className = 'input-frame error'
	small.innerText = message;
}