// Array to store registered usernames
const registeredUsers = [];

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent page reload

  // Get input values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value;

  // Error handling for age validation
  try {
    if (!Number.isInteger(Number(age)) || age <= 0) {
      throw new Error("Please enter a valid age.");
    }

    if (age < 18) {
      throw new Error("You must be at least 18 years old to register.");
    }

    // String validation for email
    if (!validateEmail(email)) {
      throw new Error("Please enter a valid email address.");
    }

    // Add the username to the array if it's unique
    if (registeredUsers.includes(username)) {
      throw new Error(
        "Username already exists. Please choose a different one."
      );
    }
    registeredUsers.push(username);

    // Display success message
    displayMessage(username);
  } catch (error) {
    alert(error.message); // Display error message in an alert
  }
}

// Email validation function
function validateEmail(email) {
  // Simple email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to display the success message with date and time
function displayMessage(username) {
  const messageElement = document.getElementById("message");

  // Get current date
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  // Create a welcome message with name in uppercase
  const welcomeMessage = `Welcome, ${username.toUpperCase()}! You registered successfully on ${formattedDate} at ${formattedTime}.`;

  // Display the message
  messageElement.textContent = welcomeMessage;
}
