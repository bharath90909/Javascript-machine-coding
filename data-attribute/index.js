const buttons = document.querySelector(".buttons");
const navLinks = document.querySelector(".nav-links");
67;
//one way
// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log(btn.dataset.value);
//   });
// });
// second way with event delgation

buttons.addEventListener("click", (e) => {
  console.log(e.target.dataset.value);
});
//this is event delegation
navLinks.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
});
