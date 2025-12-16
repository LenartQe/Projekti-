
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("contactName").value.trim();
        let email = document.getElementById("contactEmail").value.trim();
        let message = document.getElementById("contactMessage").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("All fields must be filled.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Enter a valid email address.");
            return;
        }

        alert("Message sent successfully!");
        contactForm.reset();
    });
}




const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        if (email === "" || password === "") {
            alert("All fields are required.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Enter a valid email.");
            return;
        }

        if (password.length < 4) {
            alert("Password must be at least 4 characters.");
            return;
        }

        alert("Login successful!");
        loginForm.reset();
    });
}




const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("regName").value.trim();
        let email = document.getElementById("regEmail").value.trim();
        let password = document.getElementById("regPassword").value.trim();
        let confirmPassword = document.getElementById("regConfirmPassword").value.trim();

        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("All fields are required.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Enter a valid email address.");
            return;
        }

        if (password.length < 4) {
            alert("Password must be at least 4 characters.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Registration successful!");
        registerForm.reset();
    });
}

