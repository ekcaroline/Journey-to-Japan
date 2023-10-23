const themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {

  document.body.classList.toggle('dark-mode');


}
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
