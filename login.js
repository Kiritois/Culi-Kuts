document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const forgotPasswordForm = document.querySelector("#forgotPassword");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        forgotPasswordForm.classList.add("form--hidden");
    });
    document.querySelector("#linkForgotPassword").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.add("form--hidden");
        forgotPasswordForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        forgotPasswordForm.classList.add("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        const usernameInput = loginForm.querySelector(".form__input[placeholder='Username or email']");
        const passwordInput = loginForm.querySelector(".form__input[placeholder='Password']");

        // Perform your authentication logic here
        // For this example, I'm just checking if the fields are not empty
        if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
            setFormMessage(loginForm, "error", "Username and password are required");
        } else {
            // Successful login, you can redirect or perform other actions here
            setFormMessage(loginForm, "success", "Login successful!");
            window.location.href = "index.html";
        }
    });
    forgotPasswordForm.addEventListener("submit", e => {
        e.preventDefault();


        const signEmailInput = forgotPasswordForm.querySelector("#signEmail");
        const passwordInput = forgotPasswordForm.querySelector(".form__input[placeholder='Password']");
        const confirmPasswordInput = forgotPasswordForm.querySelector(".form__input[placeholder='Confirm password']");

        // Perform your account creation logic here
        // For this example, I'm just checking if the fields are not empty
        if (
            signEmailInput.value.trim() === "" ||
            passwordInput.value.trim() === "" ||
            confirmPasswordInput.value.trim() === ""
        ) {
            setFormMessage(forgotPasswordForm, "error", "All fields are required");
        } else {
            // Successful account creation, you can redirect or perform other actions here
            setFormMessage(forgotPasswordForm, "success", "Account created successfully!")
            window.location.href = "";
        }
    });
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        const signupUsernameInput = createAccountForm.querySelector("#signupUsername");
        const emailInput = createAccountForm.querySelector(".form__input[placeholder='Email Address']");
        const passwordInput = createAccountForm.querySelector(".form__input[placeholder='Password']");
        const confirmPasswordInput = createAccountForm.querySelector(".form__input[placeholder='Confirm password']");

        // Perform your account creation logic here
        // For this example, I'm just checking if the fields are not empty
        if (
            signupUsernameInput.value.trim() === "" ||
            emailInput.value.trim() === "" ||
            passwordInput.value.trim() === "" ||
            confirmPasswordInput.value.trim() === ""
        ) {
            setFormMessage(createAccountForm, "error", "All fields are required");
        } else {
            // Successful account creation, you can redirect or perform other actions here
            setFormMessage(createAccountForm, "success", "Account created successfully!")
            window.location.href = "index.html";
        }
    });

    function setFormMessage(formElement, type, message) {
        const messageElement = formElement.querySelector(".form__message");

        messageElement.textContent = message;
        messageElement.classList.remove("form__message--success", "form__message--error");
        messageElement.classList.add(`form__message--${type}`);
    }
    function showForgotPasswordForm() {
            document.getElementById('login').classList.add('form--hidden');
            document.getElementById('forgotPasswordForm').classList.remove('form--hidden');
        }

        function showLoginForm() {
            document.getElementById('login').classList.remove('form--hidden');
            document.getElementById('forgotPasswordForm').classList.add('form--hidden');
        }
});
