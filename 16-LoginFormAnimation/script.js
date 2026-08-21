const loginForm =
    document.getElementById("loginForm");

const email =
    document.getElementById("email");

const password =
    document.getElementById("password");

const passwordToggle =
    document.getElementById("passwordToggle");

const loginButton =
    document.getElementById("loginButton");

const statusMessage =
    document.getElementById("statusMessage");

let passwordVisible = false;

passwordToggle.addEventListener(
    "click",
    () => {
        passwordVisible =
            !passwordVisible;

        password.type =
            passwordVisible
                ? "text"
                : "password";

        passwordToggle.textContent =
            passwordVisible
                ? "🙈"
                : "👁";

        passwordToggle.setAttribute(
            "aria-label",
            passwordVisible
                ? "Hide password"
                : "Show password"
        );
    }
);

function resetState() {
    loginForm.classList.remove(
        "error"
    );

    loginButton.classList.remove(
        "loading",
        "success"
    );

    statusMessage.classList.remove(
        "error",
        "success"
    );

    statusMessage.textContent = "";
}

function showError(message) {
    loginForm.classList.remove(
        "error"
    );

    void loginForm.offsetWidth;

    loginForm.classList.add(
        "error"
    );

    statusMessage.classList.add(
        "error"
    );

    statusMessage.textContent =
        message;
}

function loginSuccess() {
    loginButton.classList.remove(
        "loading"
    );

    loginButton.classList.add(
        "success"
    );

    statusMessage.classList.add(
        "success"
    );

    statusMessage.textContent =
        "Login successful!";

    setTimeout(() => {
        loginButton.classList.remove(
            "success"
        );
    }, 2200);
}

loginForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        resetState();

        const emailValue =
            email.value.trim();

        const passwordValue =
            password.value;

        if (!emailValue) {
            showError(
                "Please enter your email."
            );

            email.focus();

            return;
        }

        if (
            !emailValue.includes("@")
        ) {
            showError(
                "Please enter a valid email."
            );

            email.focus();

            return;
        }

        if (
            passwordValue.length < 6
        ) {
            showError(
                "Password must contain at least 6 characters."
            );

            password.focus();

            return;
        }

        loginButton.classList.add(
            "loading"
        );

        statusMessage.textContent =
            "Signing you in...";

        setTimeout(() => {
            loginSuccess();
        }, 1500);
    }
);