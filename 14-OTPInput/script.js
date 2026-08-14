const inputs =
    [...document.querySelectorAll(".otp-input")];

const otpGroup =
    document.getElementById("otpGroup");

const verifyButton =
    document.getElementById("verifyButton");

const statusMessage =
    document.getElementById("statusMessage");

const resendButton =
    document.getElementById("resendButton");

const DEMO_CODE = "123456";

function getCode() {
    return inputs
        .map((input) => input.value)
        .join("");
}

function resetValidation() {
    otpGroup.classList.remove(
        "success",
        "error"
    );

    statusMessage.classList.remove(
        "success",
        "error"
    );

    verifyButton.classList.remove(
        "verified"
    );

    verifyButton.textContent =
        "Verify Code";
}

function updateState() {
    resetValidation();

    inputs.forEach((input) => {
        input.classList.toggle(
            "filled",
            input.value !== ""
        );
    });

    const code = getCode();

    verifyButton.disabled =
        code.length !== inputs.length;

    statusMessage.textContent =
        code.length === inputs.length
            ? "Code ready to verify."
            : "Enter all six digits.";
}

function focusInput(index) {
    if (
        index >= 0 &&
        index < inputs.length
    ) {
        inputs[index].focus();
        inputs[index].select();
    }
}

inputs.forEach((input, index) => {

    input.addEventListener(
        "input",
        () => {
            input.value =
                input.value.replace(
                    /\D/g,
                    ""
                );

            if (input.value.length > 1) {
                input.value =
                    input.value.slice(-1);
            }

            if (
                input.value &&
                index < inputs.length - 1
            ) {
                focusInput(index + 1);
            }

            updateState();
        }
    );

    input.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Backspace" &&
                input.value === "" &&
                index > 0
            ) {
                focusInput(index - 1);
            }

            if (
                event.key === "ArrowLeft"
            ) {
                event.preventDefault();

                focusInput(index - 1);
            }

            if (
                event.key === "ArrowRight"
            ) {
                event.preventDefault();

                focusInput(index + 1);
            }

            if (
                event.key === "Enter" &&
                !verifyButton.disabled
            ) {
                verifyCode();
            }
        }
    );

    input.addEventListener(
        "focus",
        () => {
            input.select();
        }
    );
});

otpGroup.addEventListener(
    "paste",
    (event) => {
        event.preventDefault();

        const pastedText =
            event.clipboardData
                .getData("text")
                .replace(/\D/g, "")
                .slice(0, inputs.length);

        if (!pastedText) {
            return;
        }

        inputs.forEach(
            (input, index) => {
                input.value =
                    pastedText[index] || "";
            }
        );

        updateState();

        const nextEmpty =
            inputs.findIndex(
                (input) =>
                    input.value === ""
            );

        if (nextEmpty === -1) {
            inputs[
                inputs.length - 1
            ].focus();
        } else {
            inputs[nextEmpty].focus();
        }
    }
);

function verifyCode() {
    const code = getCode();

    otpGroup.classList.remove(
        "success",
        "error"
    );

    statusMessage.classList.remove(
        "success",
        "error"
    );

    void otpGroup.offsetWidth;

    if (code === DEMO_CODE) {

        otpGroup.classList.add(
            "success"
        );

        statusMessage.classList.add(
            "success"
        );

        statusMessage.textContent =
            "Verification successful!";

        verifyButton.classList.add(
            "verified"
        );

        verifyButton.textContent =
            "Verified ✓";

        verifyButton.animate(
            [
                {
                    transform:
                        "scale(1)"
                },
                {
                    transform:
                        "scale(0.96)"
                },
                {
                    transform:
                        "scale(1.03)"
                },
                {
                    transform:
                        "scale(1)"
                }
            ],
            {
                duration: 320,
                easing: "ease-out"
            }
        );

    } else {

        otpGroup.classList.add(
            "error"
        );

        statusMessage.classList.add(
            "error"
        );

        statusMessage.textContent =
            "Invalid code. Try 123456.";
    }
}

verifyButton.addEventListener(
    "click",
    verifyCode
);

function startResendTimer() {
    let seconds = 15;

    resendButton.disabled = true;

    resendButton.textContent =
        `Resend (${seconds}s)`;

    const timer =
        setInterval(() => {
            seconds -= 1;

            if (seconds <= 0) {
                clearInterval(timer);

                resendButton.disabled =
                    false;

                resendButton.textContent =
                    "Resend";

                return;
            }

            resendButton.textContent =
                `Resend (${seconds}s)`;
        }, 1000);
}

resendButton.addEventListener(
    "click",
    () => {
        statusMessage.classList.remove(
            "success",
            "error"
        );

        statusMessage.textContent =
            "A new verification code was sent.";

        inputs.forEach(
            (input) =>
                input.value = ""
        );

        updateState();

        inputs[0].focus();

        startResendTimer();
    }
);

updateState();