document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");

    loginButton.addEventListener("click", function() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === "your_username" && password === "your_password") {
            // Successful login, redirect or perform actions here
            alert("Login successful!");
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    });
});
