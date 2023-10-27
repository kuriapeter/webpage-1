document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the header element
    var header = document.querySelector("header");

    // Add a click event listener to the header
    header.addEventListener("click", function () {
        // Change the background color of the header when it's clicked
        header.style.backgroundColor = "#FF5733";
    });
});
// Add interactivity to the "Learn More" button
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the button
    var learnMoreButton = document.getElementById("learnMoreButton");

    // Add a click event listener
    learnMoreButton.addEventListener("click", function () {
        // You can add your action here, such as opening a new page or displaying more content
        alert("You've clicked 'Learn More'!");
    });
});
