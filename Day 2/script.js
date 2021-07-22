// Creates error log messages
function setErrorLog(inputElement, errorMessage, state) {
	if (state === true) {
		inputElement.classList.add("form__input--error");
	} else {
		inputElement.classList.remove("form__input--error");
	}
	inputElement.parentElement.querySelector(
		".form__message--error"
	).textContent = errorMessage;
}
// Checks if the fields are not empty
function setRequiredLog(inputElement) {
	inputElement.addEventListener("blur", (e) => {
		if (!e.target.value.length) {
			setErrorLog(inputElement, "This Field is Required", true);
		}
	});
	inputElement.addEventListener("focus", (e) => {
		setErrorLog(inputElement, "", false);
	});
}

// Creates error log messages based on user-invalid input
const setUserNameError = (event) => {
	let maxLen = 25;
	let len = event.target.value.length;
	console.log(UserName);
	if (event.key === " ") {
		setErrorLog(UserName, "Can not contain spaces", true);
		event.preventDefault();
	} else if (event.code === "Backspace") {
		len = len - 1;
		setErrorLog(UserName, "", false);
	} else if (len == maxLen) {
		setErrorLog(
			UserName,
			"Email or Username can not be more than 25 characters long",
			true
		);
		event.preventDefault();
	} else if (len > maxLen) {
		event.target.value = event.target.value.substring(0, maxLen);
	} else if (len < maxLen) {
		setErrorLog(UserName, "", false);
	}
};

const UserName = document.querySelector("#Email_or_Username");

document.querySelectorAll(".form__input").forEach((inputElement) => {
	console.log(inputElement);
	setRequiredLog(inputElement);
});

UserName.addEventListener("keydown", setUserNameError);
