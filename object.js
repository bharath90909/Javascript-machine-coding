// const data = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
//   { id: 2, title: "Interstellar", genre: "Sci-Fi", year: 2014 },
//   { id: 3, title: "The Dark Knight", genre: "Action", year: 2008 },
//   { id: 4, title: "The Matrix", genre: "Sci-Fi", year: 1999 },
//   { id: 5, title: "Forrest Gump", genre: "Drama", year: 1994 },
//   { id: 6, title: "Titanic", genre: "Romance", year: 1997 },
//   { id: 7, title: "Avatar", genre: "Sci-Fi", year: 2009 },
//   { id: 8, title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
//   { id: 9, title: "Gladiator", genre: "Action", year: 2000 },
//   { id: 10, title: "The Godfather", genre: "Crime", year: 1972 },
// ];

// const result = data.reduce((acc, item) => {
//   acc[item.genre] = acc[item.genre] || [];
//   acc[item.genre].push(item.title);
//   return acc;
// }, {});
// console.log("output", result);

// 2.Count the Occurrences of Each Property Value

// const users = [
//   { name: "Alice", country: "USA" },
//   { name: "Bob", country: "India" },
//   { name: "Charlie", country: "USA" },
//   { name: "David", country: "India" },
//   { name: "Eve", country: "UK" },
// ];

// const result = users.reduce((acc, user) => {
//   acc[user.country] = acc[user.country] || 0;
//   acc[user.country] += 1;
//   return acc;
// }, {});
// console.log("output", result);

// 3. Find the Oldest Person in an Object Array
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 42 },
//   { name: "Charlie", age: 35 },
// ];

// const result = people.reduce((acc, person) => {
//   acc = person.age > acc.age ? person : acc;
//   return acc;
// }, people[0]);

// console.log("output", result);

// 4. Remove Duplicates from an Array of Objects

// const products = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Phone" },
//   { id: 1, name: "Laptop" },
// ];

// const uniqueProducts = Array.from(
//   new Map(products.map((product) => [product.id, product])).values()
// );

// console.log(uniqueProducts);

// 5. Merge Two Objects by Key
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// const details = [
//   { id: 1, age: 25 },
//   { id: 2, age: 30 },
// ];

// const result = users.map((user) => {
//   const userDetails = details.find((detail) => detail.id === user.id);
//   return {
//     ...user,
//     ...userDetails,
//   };
// });
// console.log("output", result);

// 6 . Get Unique Values from an Array of Objects

// const people = [
//   { name: "Alice", country: "USA" },
//   { name: "Bob", country: "India" },
//   { name: "Charlie", country: "USA" },
//   { name: "David", country: "Canada" },
// ];

// const result = Object.keys(
//   people.reduce((acc, person) => {
//     acc[person.country] = acc[person.country] || [];
//     acc[person.country].push(person.name);
//     return acc;
//   }, {})
// );

// 7. Convert an Array of Objects to a Map where id is key and name id value
// const data = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Alice" },
//   { id: 3, name: "Bob" },
// ];
// const result = new Map(data.map((item) => [item.id, item.name]));

// 8. Sum of Values in an Array of Objects
// const orders = [
//   { id: 1, amount: 200 },
//   { id: 2, amount: 300 },
//   { id: 3, amount: 150 },
// ];
// const result = orders.reduce((acc, item) => acc + item.amount, 0);

// 9.Count Occurrences of Each Element in an Array
// const numbers = [1, 2, 3, 1, 2, 1, 4];
// const result = numbers.reduce((acc, key) => {
//   acc[key] = acc[key] || 0;
//   acc[key] += 1;
//   return acc;
// }, {});

// 10. Find the First Object with a Specific Property Value
// const users = [
//   { id: 1, name: "John", age: 25 },
//   { id: 2, name: "Alice", age: 30 },
//   { id: 3, name: "Bob", age: 25 },
// ];
// const result = users.find((user) => user.age === 25);

// 11.Create an Object from Two Arrays
// const keys = ["name", "age", "city"];
// const values = ["John", 30, "New York"];

// const result = keys.reduce((acc, key, index) => {
//   acc[key] = values[index];
//   return acc;
// }, {});

// 13.Flatten an Array of Arrays
// flat and flatMap flatten only one level
// const nestedArrays = [
//   [1, 2],
// [3, [4, 8]] it will not be 3,4,8 using flat and flat map
//   [3,4],
//   [5, 6],
// ];
// const result = nestedArrays.flatMap((arr) => arr);
// const result = nestedArrays.flat();

// Summary:
// flat(): Just flattens the array (no transformation).
// flatMap(): First maps (transforms) the elements using a callback function and then flattens them by one level.

// 14. Double the each element and return a flatten array
// const nestedArrays = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const result = nestedArrays.flatMap((arr) => arr.map((num) => num * 2));

// 14. flatting arrays upto any depth

// const nestedArrays = [1, [2, [3, [4, [5]]]]];

// Flatten two levels
// const flattenedArray = nestedArrays.flat(2);
// console.log(flattenedArray);
// [1, 2, 3, [4, [5]]]

// Flatten completely
// const completelyFlattenedArray = nestedArrays.flat(Infinity);
// console.log(completelyFlattenedArray);
// [1, 2, 3, 4, 5]

// console.log(result);

// 15.Sort an Array of Objects by a Property
// const items = [
//   { name: "item1", price: 30 },
//   { name: "item2", price: 20 },
//   { name: "item3", price: 10 },
// ];

// items.sort((a, b) => a.price - b.price);
// console.log(items);

//16. Output After Filtering Names that Start with 'A'
// const names = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Alice" },
//   { id: 3, name: "Bob" },
// ];
// console.log(names.filter((name) => name.name.startsWith("A")));

/** SEARCHING INSIDE OBJECTS**/

//1.Search for a key in a simple object
const person = { id: 1, name: "John", age: 25 };
//search name key
// if (Object.keys(person).includes("name")) console.log("key exists");

//2.Search in nested objects
// const user = {
//   id: 1,
//   name: "Alice",
//   address: {
//     city: "New York",
//     zip: "10001",
//   },
//   contact: {
//     mobile: "9182430755",
//     code: {
//       ind: +91,
//     },
//   },
// };

//never use forEach for rescurion cause the return statement dont directly termiate the function
//it terminates only the iteration of loop
//this code gives error even key found
// function keySearch(obj) {
//   Object.keys(obj).forEach((key) => {
//     if (typeof obj[key] === "object") {
//       const found = keySearch(obj[key]);
//       if (found) {
//         return found;
//       }
//     }
//     if (key === "ind") {
//       return true;
//     }
//   });
//   return false;
// }
// const isKeyExist = keySearch(user);
// console.log("isKeyExist: ", isKeyExist);
//use only for in or for of loop
//like this code below
// const data = {
//   user: {
//     profile: {
//       details: {
//         contact: {
//           email: "alice@example.com",
//         },
//       },
//     },
//   },
// };

// function getEmail(obj) {
//   for (let key of Object.keys(obj)) {
//     if (typeof obj[key] === "object") {
//       const result = getEmail(obj[key]);
//       if (result) return result;
//     }
//     if (key === "email") {
//       return obj[key];
//     }
//   }
//   return null;
// }

// console.log(getEmail(data));

// 3. Find the Most Frequent Value in an Array of Objects:

// const data = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 25 },
// ];
// const reducedObject = data.reduce((acc, item) => {
//   acc[item.age] = acc[item.age] || 0;
//   acc[item.age] += 1;
//   return acc;
// }, {});
// let maxValue = Number.MIN_VALUE;
// let frequentAge;
// for (const key in reducedObject) {
//   if (reducedObject[key] > maxValue) {
//     frequentAge = key;
//     maxValue = reducedObject[key];
//   }
// }
// console.log("Frequent age: ", frequentAge);

//4. Transform an Array of Objects into a Lookup Table:
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Alice" },
//   { id: 3, name: "Bob" },
// ];

// Convert this into { 1: "John", 2: "Alice", 3: "Bob" }.

// const result = users.reduce((acc, user) => {
//   acc[user.id] = user.name;
//   return acc;
// }, {});
// console.log(result);

/****FAANG****/
// 1. Extract Unique Values from an Array of Objects
// const data = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 25 },
// ];

// Find all unique ages and return them as an array.

//First way

// const uniqueAges = [...new Set(data.map((user) => user.age))];
// console.log(uniqueAges);

// const uniqueAgePersons = Array.from(
//   new Map(data.map((user) => [user.age, user])).values()
// );
// console.log(uniqueAgePersons);
