const root = document.querySelector("#root");
const button = document.createElement("button");
const text = document.createTextNode("toggle");

button.appendChild(text);
root.appendChild(button);

button.classList.add("button");
// document.querySelector(".button").addEventListener("click", () => {
//   this.style.color = "red"; // throw erro cause here in ()=>{} this reffers to
//   //window object and window has not style.color property
// });

//toggle
document.querySelector(".button").addEventListener("click", function () {
  this.classList.toggle("dark");
  if (this.classList.contains("dark")) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
});
let currentIndex = -1;

function handleClick(index) {
  currentIndex = index;
  console.log(index);
}
const accordion = document.getElementById("accordion-container");

const accordions = Array.from({ length: 5 }, (_, i) => {
  return ` <div class="accordion">
        <h1 class="heading"> Accordion-${i + 1}</h1>
        <span>
            +
        </span>
        ${currentIndex === i ? "<p>This is accordion - ${i + 1}</p>" : ""}
        
    </div>`;
}).join(" ");
console.log(accordions);
accordion.insertAdjacentHTML("beforeEnd", accordions);
console.log(accordion.children);
Array.from(accordion.children).forEach((ele, index) => {
  ele.addEventListener("click", () => {
    handleClick(index);
  });
});
