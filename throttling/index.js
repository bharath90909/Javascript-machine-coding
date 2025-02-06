function expensive() {
  console.log(window.innerWidth);
}
function throttle(fn, limit) {
  let isThrottling = false;
  return function () {
    if (!isThrottling) {
      fn();
      isThrottling = true;
      setTimeout(() => {
        isThrottling = false;
      }, limit);
    }
  };
}
const betterFn = throttle(expensive, 1000);
window.addEventListener("resize", betterFn);
