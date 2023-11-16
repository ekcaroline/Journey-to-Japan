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
  
  // TODO: Query for button with an id "theme-button"
  const themeButton = document.getElementById("theme-button");
  
  // TODO: Complete the toggleDarkMode function
  const toggleDarkMode = () => {
  
    document.body.classList.toggle('dark-mode');
  
  }
  
  // TODO: Register a 'click' event listener for the theme button
  themeButton.addEventListener('click', toggleDarkMode);
  