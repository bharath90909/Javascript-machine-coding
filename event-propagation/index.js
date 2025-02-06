const grand = document.getElementById("grand-parent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const children = document.getElementsByTagName("ul");
children[0].addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
});

grand.addEventListener("click", () => {
  console.log("Grand is clicked");
});

parent.addEventListener("click", () => {
  console.log("Parent is clicked");
});

child.addEventListener("click", () => {
  console.log("child is clicked");
});
