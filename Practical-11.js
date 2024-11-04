// Function to validate the login form
function validateLogin(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get input values
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Username validation: at least 5 characters
  if (username.length < 5) {
    errorMessage.textContent = "Username must be at least 5 characters long.";
    return false;
  }

  // Password validation: at least 8 characters, including 1 uppercase, 1 lowercase, and 1 number
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordPattern.test(password)) {
    errorMessage.textContent =
      "Password must be at least 8 characters, including an uppercase letter, a lowercase letter, and a number.";
    return false;
  }

  // Clear error message if validation passes
  errorMessage.textContent = "";
  alert("Login successful!");
  return true; // Allow form submission
}
