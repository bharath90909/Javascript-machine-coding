const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  betterFn(e.target.value);
});

function fetchData() {
  console.log("Data fetched....", input.value);
}

function debouncing(fn, delay) {
  let timer;
  return function (args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(args);
    }, delay);
  };
}

const betterFn = debouncing(fetchData, 500);
