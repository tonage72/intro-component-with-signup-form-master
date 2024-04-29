const buttonClaim = document.querySelector(".button-claim");

buttonClaim.addEventListener('click', e => {
	validateInputs();
})

function validateInputs() {
	const inputFirstName = document.getElementsByName("input-first-name")[0].value.trim();
	const inputLastName = document.getElementsByName("input-last-name")[0].value.trim();
	const inputEmail = document.getElementsByName("input-email")[0].value.trim();
	const inputPassword = document.getElementsByName("input-password")[0].value.trim();

	if(inputFirstName === '') {
		displayError()
	}
}