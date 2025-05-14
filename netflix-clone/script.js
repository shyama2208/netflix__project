// // script.js
// const row = document.querySelector(".movie-row");
// let scrollAmount = 0;

// setInterval(() => {
//   scrollAmount += 200;
//   if (scrollAmount > row.scrollWidth - row.clientWidth) scrollAmount = 0;
//   row.scrollTo({ left: scrollAmount, behavior: "smooth" });
// }, 3000);
// script.js
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

