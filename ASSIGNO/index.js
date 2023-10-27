document.addEventListener("DOMContentLoaded", function () {
    // Get references to navigation links
    var navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Use smooth scrolling behavior
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
