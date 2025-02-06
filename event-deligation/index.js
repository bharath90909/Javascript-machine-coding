const children = document.getElementsByTagName("ul");
children[0].addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
});
