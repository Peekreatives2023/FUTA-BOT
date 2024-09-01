
const signupForm = document.querySelector('.signup-form');
const nameInput = document.querySelector('.input-field[type="text"]');
const passwordInput = document.querySelector('.input-field[type="password"]');
const confirmPasswordInput = document.querySelector('.input-field[type="Confirm password"]');
const submitButton = document.querySelector('.submit-btn');
const successMessage = document.createElement('p');

// Add event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission   


  // Get the entered name, password, and confirm password
  const name = nameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Check if password and confirm password match
  if (password !== confirmPassword)   
 {
    alert('Passwords do not match.');
    return;
  }

  // Perform signup logic (e.g., send data to server, update UI)
  console.log('Signup successful!');

  // Display success message
  successMessage.textContent = 'Signup successful!';
  signupForm.appendChild(successMessage);

  // Clear the form
  signupForm.reset();
});


const loginForm = document.querySelector('.login-form');
const usernameInput = document.querySelector('.input-field[type="text"]');
const passwordInput = document.querySelector('.input-field[type="password"]');
const submitButton = document.querySelector('.submit-btn');
const successMessage = document.createElement('p');

// Add event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission   


  // Get the entered username and password
  const username = usernameInput.value;
  const password = passwordInput.value;


  // Check if username and password are valid   
  if (isValidUsername(username) && isValidPassword(password)) {
    // Perform login logic (e.g., send data to server, update UI)
    console.log('Login successful!');

    // Display success message
    successMessage.textContent = 'Login successful!';
    loginForm.appendChild(successMessage);

    // Clear the form
    loginForm.reset();
  } else {
    // Display error message or handle invalid credentials
    console.error('Invalid username or password.');
  }
});

const homePageButton = document.querySelector('.navbar ul li:first-child a');

homePageButton.addEventListener('click', () => {
    window.location.href = 'picturepage.html';
});