// script.js

// Example script for basic functionality

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log("Form Data Submitted:", data);

    // Add your logic to process the form data here
}

// Attach event listener to the form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#yourFormId"); // Replace with your form's ID
    if (!form) {
        console.warn('Form with ID "yourFormId" not found. Please ensure the form exists in your HTML.');
    } else {
        form.addEventListener("submit", handleFormSubmit);
    }
});

    const contentElement = document.querySelector("#content"); // Replace with your content element's ID
    if (!contentElement) {
        console.warn('Element with ID "content" not found. Please ensure the element exists in your HTML.');
    } else {
        contentElement.textContent = "Content updated dynamically!";
    }
        contentElement.textContent = "Content updated dynamically!";
    }
}

// Call updateContent on page load
document.addEventListener("DOMContentLoaded", updateContent);