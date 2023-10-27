document.addEventListener("DOMContentLoaded", function () {
    var contactButton = document.getElementById("contactButton");

    contactButton.addEventListener("click", function () {
        openContactForm();
    });

    function openContactForm() {
        // You can customize this function to open a contact form or provide contact information.
        alert("Clicking the 'Contact Us' button would open a contact form or provide contact information.");
    }
});
const outfitTable = document.getElementById("outfitTable");
const outfitName = document.getElementById("outfitName");
const outfitDescription = document.getElementById("outfitDescription");

outfitTable.addEventListener("click", (event) => {
    if (event.target.tagName === "TD" && event.target.parentElement.rowIndex > 0) {
        const outfitRow = event.target.parentElement;
        const name = outfitRow.cells[0].textContent;
        const description = outfitRow.cells[1].textContent;
        outfitName.textContent = name;
        outfitDescription.textContent = description;
    }
});
