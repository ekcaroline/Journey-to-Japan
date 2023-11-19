document.addEventListener('DOMContentLoaded', function() {
  let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
  };

  let revealableContainers = document.querySelectorAll('.revealable');

  let animationFrameId;

  function handleScroll() {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(reveal);
  }

  function reveal() {
    for (let i = 0; i < revealableContainers.length; i++) {
      let windowHeight = window.innerHeight;
      let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

      if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
        revealableContainers[i].classList.add('active');
      } else {
        revealableContainers[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', handleScroll);

  reveal(); // Initial check when the page loads
});

// Get the Reduce Motion button
const reduceMotionButton = document.getElementById('reduce-motion-button');

// Add a click event listener to toggle the reduce-motion class and call the reduceMotion function
reduceMotionButton.addEventListener('click', () => {
    document.body.classList.toggle('reduce-motion');
    reduceMotion();
});

// Function to update animation properties and style of revealableContainers
function reduceMotion() {
    // Get all revealable containers
    const revealableContainers = document.querySelectorAll('.revealable');

    // Loop through revealableContainers and update styles
    for (let i = 0; i < revealableContainers.length; i++) {
        revealableContainers[i].style.transitionDelay = animation.transitionDelay;
        revealableContainers[i].style.transitionDuration = animation.transitionDuration;
        revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
        // Update more styles as needed
    }
}

// TODO: Query for button with an id "theme-button"
const themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

  document.body.classList.toggle('dark-mode');

}

// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener('click', toggleDarkMode);

// Declare variables
let count = 3;
let signNowButton;

// Get the modal and the close button
const modal = document.getElementById('thanks-modal');
const closeButton = document.getElementById('close-modal-button');

// Function to open the modal
function openModal() {
  modal.style.display = 'flex'; // Display the modal
   // Automatically close the modal after 4 seconds
    setTimeout(function() {
      closeModal();
    }, 4000);
  }
// Function to close the modal
function closeModal() {
  modal.style.display = 'none'; // Hide the modal
}

signNowButton = document.getElementById('sign-now-button');
if (signNowButton) {
  signNowButton.addEventListener('click', function () {
    addSignature(); // Your existing function to add a signature
    openModal(); // Open the modal after signing

  });
}
// Add a click event listener to the close button
closeButton.addEventListener('click', closeModal);

function addSignature() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Get the input values submitted in the form
  const nameInput = document.getElementById('name').value.trim();
  const hometownInput = document.getElementById('hometown').value.trim();
  const emailInput = document.getElementById('email').value.trim();

  // Check if any of the input values do not meet the validation criteria
  if (nameInput.length < 2 || hometownInput.length < 2 || emailInput.length < 2 || !emailInput.match(emailPattern)) {
    alert("Please fill in all fields correctly.");
    return; // Prevent adding the signature
  } else {
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

      // Create and append the modal content to the modal placeholder
      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';
      modalContent.id = 'thanks-modal-content';
      modalContent.innerHTML = `
        <div id="modal-text-container">
          <p id="thanks-modal-content-placeholder">Arigato gozaimasu, ${nameInput}, for signing!</p>
        </div>
      `;

      // Append the modal content to the modal placeholder
      const modalPlaceholder = document.getElementById('thanks-modal-content-placeholder');
      modalPlaceholder.innerHTML = ''; // Clear existing content
      modalPlaceholder.appendChild(modalContent);

      // Open the modal
      openModal();
    }

    // Clear the form
    document.getElementById('sign-petition').reset();
  }
}

const validateForm = () => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
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

