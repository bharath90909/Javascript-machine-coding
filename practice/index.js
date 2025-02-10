function showLoader() {
  document.querySelector(".loading").classList.add("show");
  setTimeout(() => showContent(), 500);
}

function showContent() {
  document.querySelector(".loading").classList.remove("show");
  document.querySelector(".content").classList.add("show");
}

window.addEventListener("load", () => {
  showLoader();
});
