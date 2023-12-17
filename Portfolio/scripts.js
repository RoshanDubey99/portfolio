const textToType = "Hi I am Roshan Dubey, and I am a Student Enterprenuer";

let index = 0;
const speed = 50; // Adjust the typing speed (milliseconds per character)

function typeText() {
  if (index < textToType.length) {
    document.getElementById("typed-text").textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

// Call the function when the window loads
window.onload = typeText;

const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});


// const hamburger = document.querySelector('.hamburger-menu');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('open');
// });
