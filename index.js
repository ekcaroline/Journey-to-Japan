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

//Query for button with an id "theme-button"
const themeButton = document.getElementById("theme-button");

//toggleDarkMode function
const toggleDarkMode = () => {

  document.body.classList.toggle('dark-mode');


}

//Register a 'click' event listener for the theme button
themeButton.addEventListener('click', toggleDarkMode);

count = 3;

document.addEventListener('DOMContentLoaded', function() {
  const signNowButton = document.getElementById('sign-now-button');
  if (signNowButton) {
    signNowButton.addEventListener('click', addSignature);
  }
});

const addSignature = () => {
  // Get the input values submitted in the form
  const nameInput = document.getElementById('name').value;
  const hometownInput = document.getElementById('hometown').value;
  const emailInput = document.getElementById('email').value;

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
  }
};
