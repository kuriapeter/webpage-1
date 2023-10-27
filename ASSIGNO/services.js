// Add interactivity to the "Contact Us" button
document.addEventListener("DOMContentLoaded", function () {
    var contactButton = document.getElementById("contactButton");

    contactButton.addEventListener("click", function () {
        // You can add your action here, such as opening a contact form or providing contact information.
        alert("Clicking the 'Contact Us' button would allow users to get in touch for more information or a quote.");
    });
});
// Get references to the video element and the play button
const video = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");

// Add a click event listener to the play button
playButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playButton.textContent = "Pause";
    } else {
        video.pause();
        playButton.textContent = "Play";
    }
});
