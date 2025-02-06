const obj1 = {
  greet: function (...args) {
    console.log(`Hello ${this.name} `);
    args.forEach((element) => {
      console.log(element);
    });
  },
};

const obj2 = {
  name: "Bharath",
};

obj1.greet.call(obj2, "how are you?", "is everything fine?");
// obj1.greet.apply(obj2, ["how are you?", "is everything fine?"]);
// const greetFn = obj1.greet.bind(obj2);
// greetFn("how are you?", "is everything fine?");
