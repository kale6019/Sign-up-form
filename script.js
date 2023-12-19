document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const errorContainer = document.querySelector(".error");

    function displayError(message) {
        errorContainer.textContent = message;
        errorContainer.style.color = "red";
    }

    function clearError() {
        errorContainer.textContent = "";
    }

    function checkPasswordMatch() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            displayError("Passwords do not match!");
        } else {
            clearError();
        }
    }

    // Attach the checkPasswordMatch function to both password and confirm password input events
    passwordInput.addEventListener("input", checkPasswordMatch);
    confirmPasswordInput.addEventListener("input", checkPasswordMatch);
});

