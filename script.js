// Get the button and form element
const submitButton = document.getElementById('submit-button');
const form = document.getElementById('signup-form');

// Add an event listener to the button to submit the form
submitButton.addEventListener('click', function() {
    form.submit(); // Trigger form submission
});

// Function to validate form fields
function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false; // Prevent form submission
    }

    // Basic email format validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    // If everything is valid, submit the form
    return true;
}