// Get the like button and like count element
const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");

// Initialize the like count from localStorage or default to 0
let count = parseInt(localStorage.getItem("likeCount")) || 0;
likeCount.textContent = count;

// Add a click event listener to the like button
likeButton.addEventListener("click", function () {
    // Increment the count
    count++;

    // Update the like count element
    likeCount.textContent = count;

    // Save the updated count to localStorage
    localStorage.setItem("likeCount", count.toString());
});

// TODO: Query for button with an id "theme-button"
const themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

  document.body.classList.toggle('dark-mode');


}

// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener('click', toggleDarkMode);

count = 3;

document.addEventListener('DOMContentLoaded', function() {
  const signNowButton = document.getElementById('sign-now-button');
  if (signNowButton) {
    signNowButton.addEventListener('click', addSignature);
  }
});

const addSignature = () => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Get the input values submitted in the form
  const nameInput = document.getElementById('name').value.trim();
  const hometownInput = document.getElementById('hometown').value.trim();
  const emailInput = document.getElementById('email').value.trim();

  // Check if any of the input values do not meet the validation criteria
  if (nameInput.length < 2 || hometownInput.length < 2 || emailInput.length < 2 || !emailInput.match(emailPattern)) {
      alert("Please fill in all fields correctly.");
      return; // Prevent adding the signature
  } else{
    // Create a new paragraph element for the signature
    const newSignature = document.createElement('p');
    newSignature.textContent = `🖊️ ${nameInput} from ${hometownInput} have signed this petition and support this cause.`;

    // Find the signatures section in the DOM and append the new signature
    const signaturesSection = document.querySelector('.signatures');
    signaturesSection.appendChild(newSignature);

    // Update the count variable (assuming it's declared globally)
    count = count + 1;

    // Find the counter element and update it
    const counterElement = document.getElementById('counter');
    if (counterElement) {
      counterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

    // Clear the form
    document.getElementById('sign-petition').reset();
    }
  }
};

const signNowButton = document.getElementById('sign-now-button');

const validateForm = () => {
  let containsErrors = false;
  const petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.trim().length < 2 || !petitionInputs[i].value.trim().match(emailPattern)) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!containsErrors) {
    // If there are no errors, add the signature
    addSignature();
  }
};

// Add a 'click' event listener for the sign now button
signNowButton.addEventListener("click", validateForm);