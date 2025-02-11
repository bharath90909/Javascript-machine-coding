const source = {
  city: "Hyderabad",
  age: "50 Years",
  fun: function () {
    console.log("Function is inherited..");
  },
};

const target = {
  city: "Delhi",
};

Object.setPrototypeOf(target, source);
console.log(target.city); // "delhi" --> property will not be overwritten
console.log(target.age); // "50 years"
console.log(target.fun()); //  console.log("Function is inherited..");


