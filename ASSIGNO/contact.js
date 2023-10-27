document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // You can add code here to handle form submission, such as sending the data to a server.
        alert("Form submitted. We'll be in touch soon.");
    });
});
