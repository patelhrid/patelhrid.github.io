const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  // Toggle a class that controls the visibility
  navLinks.classList.toggle('nav-open');
});
