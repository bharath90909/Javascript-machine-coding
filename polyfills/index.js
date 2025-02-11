// Creating own function

Function.prototype.myFun = function () {
  console.log("THis is my own function");
};
Array.prototype.myFun = function () {
  console.log("This is my own array function");
};

const array = [1, 2, 3];
const obj = {
  name: "Bharath",
  greet: Function.prototype.myFun,
};

obj.greet();

array.myFun();

console.log(array.__proto__);

console.log(array.__proto__.myFun());
