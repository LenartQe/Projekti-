const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("contactName").value;
        let email = document.getElementById("contactEmail").value;
        let message = document.getElementById("contactMessage").value;

        if (name === "" || email === "" || message === "") {
            alert("Ju lutem plotësoni të gjitha fushat");
            return;
        }

        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            alert("Email-i nuk është valid");
            return;
        }

        alert("Mesazhi u dërgua me sukses");
        contactForm.reset();
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        if (email === "" || password === "") {
            alert("Ju lutem plotësoni të gjitha fushat");
            return;
        }

        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            alert("Email-i nuk është valid");
            return;
        }

        if (password.length < 4) {
            alert("Fjalëkalimi duhet të ketë së paku 4 karaktere");
            return;
        }

        alert("Kyçja u realizua me sukses");
        loginForm.reset();
    });
}

