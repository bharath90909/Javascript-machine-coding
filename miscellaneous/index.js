//primitive data types are copied by values
//non primitive data types are copied by references

// typeof null --> object
// typeof undefined --> undefined
// typeof NaN --> number
// typeof function(){}--> function
// (typeof typeof 1) --> string because typeof 1 --> "number "--> typeof 'number' --> string

// boolean type + number =>boolean converts to numeric value
// boolean type + string =>boolean converts to string value
// boolean type + boolean type =>boolean converts to numeric value

console.log(true + 1); // 2
console.log(true + "1"); // "true1"
console.log(true + true); // 2
console.log(true + false); //1

// All objects in JavaScript are truthy, even empty objects {} and [].
// if ({}) {
//     console.log("This runs because {} is truthy!");
//   }

//loose comparison between objects and primitive types

// The rule for == when comparing an object  to a primitive
// The object is converted to a primitive using .toString().

// ex [].toString()==>"" and {}.toString()=>"[object object]"

// when doing equality operation between array and  primitive types, the empty array
// turns to be empty string by

console.log([] == 0); //true coz [].toString()-->""-->false-->0
console.log([0] == 0); //true coz [0].toString()-->"0"-->0(in this case)
console.log([""] == 0); //true
console.log([1] == 0); //false coz [1].toString()-->"1"-->1
console.log([] == ![]); // true here comp btw two arrays  so
// (![])==> !true==>false and the []==>""==>false so finally false==false is true

console.log({} == 0); //false coz {}.toString()-->"[object,object]"==0 gives false
console.log({} == !{}); // false here true==!(true)==>true==false gives false

// but here comp btw non primitite types so references be evaluated

console.log([] == []); //false
console.log({} == {}); //false

//remember down the below + is unary operator , it tries to convert the operand to numeric value

// console.log(+null)-->0  null as numeric gives 0
// console.log(+true)--> 1
// console.log(+"123")--> 123
// console.log(+undefined)--> NaN coz undefinded can't be converted to a numeric value

// console.log(5+null)==> 0
// console.log(5+undefinde)==> NaN
console.log(5 + NaN); // NaN
console.log(5 - NaN); // NaN
console.log(5 * NaN); // NaN
console.log("5" + NaN); // "5NaN" coz addition btw string+nan will be string

console.log("8" + 1 + 1); // "811"
console.log(+"8" + 1 + 1); // 10 unary + has high precedence

//mathematical operation between primitive and non primitive or non primitive and non pirimitive than the non primities tries to convert to string
// by using .toString() method

console.log([1, 2] + false); //"1,2false" ==>[1,2].toString()+false==>"1,2"+false=>"1,2false"
console.log([1] - false); //1
console.log([1, 2] - false); //NaN

console.log([1] + [2]); //"12"==> [1].toString()+[2].toString() ="12"
console.log([1] + 1); // "11"

//post increment and pre incrementalso converts non numeric to numeric values

let a = null;
console.log(a++); // 0
console.log(a); // 1

let b = undefined;
console.log(b++); // NaN
console.log(b); //NaN

// if u perfeom subtraction and multiplication bwteen two diff data types they tries to turn to be a number
console.log("5" - true); //5-1==>4
console.log("5" - null); //5-0==>5
console.log("5" * true); //5*1==>5
console.log("5" * null); //5*0==>0

console.log(Boolean({})); // true coz {}==>true
console.log(Boolean([])); //true coz []==true
console.log(Boolean(" ")); //true
console.log(Boolean("")); //false
console.log(Boolean(0));
console.log(Boolean(new Boolean(1))); // true coz new Booelan(1) will return empty object {}
// now Booelan({})===> true

// logical operator precednce AND>OR
console.log(1 || (2 && 3)); // gives 1

for (var i = 1; i <= 2; i++) {
  console.log(i);
}
console.log(i); // outputs 3 coz var has block scope

// in operator on arrays check for indices

let arr = [1, 2, 3, 4];
console.log(1 in arr); // true
console.log(2 in arr); // true
console.log(3 in arr); // true
console.log(4 in arr); // false coz index 4 is not present

// in on objects check keys
let obj = {
  a: "A",
  b: "B",
};
console.log("a" in obj); // true
console.log(a in obj); // false coz a is not key here

const object = { age: 25 };
const { age: userage } = obj;
console.log(userage); //25
// console.log(age); gives refernce error  : age is not defined
//coz once u renamed as userage u never able to acess age property again

console.log([1, 2, 3].pop()); //return 3
console.log([1, 2, 3].shift()); // return 1

// trying to destructure a string
/// the out will be a object with properties related to string
// it looks like {length:,some extra properties related to string}

let { length } = "Bharath";
console.log(length); // 7

//Delete operator only works with global object and object created by user only
// it will not impact on any variable declared with var,let and const

const newObj = {
  name: "Bharath",
  age: 5,
};

console.log("y:", newObj.y); // undefined
const x = 100;
// y = 20; this y is attached to global object as a property
console.log(delete newObj.age); //true
console.log(newObj); // {name:"Bharath"}

// console.log(delete x); //false
// console.log(delete y); //true

//delete with arrays
const deleteWithArray = [1, 2, 3];
delete deleteWithArray[1]; // delete value at index 1 but add a new <empty element> in place of index 1
console.log(deleteWithArray); // [1,<empty element> ,3]
console.log(deleteWithArray.length); // 3

const arrFn = () => {
  console.log(this.count); //undefinded
  //coz arrfn has no this context ,insted they inherit from its kexical scope
  //here it is global scope that is window but window has no count propery on it
  //so it results in undefined
};
arrFn();

//strings are immutable ,

const str = "Bharath";
str.length = 0;
console.log(str.length); // 7 coz we cant modify the string and its properties once they are created

//increasing array length

const array = [];
console.log(array.length);
array[9] = "Hai";
array[4] = "hello";
console.log(array); //check it
//even hello its at number 4 index already 9th index is full filled so length will be 10
console.log(array.length); // 10 cause [<emoty items>..hello...<empty items>...,"hai"] total length=10
array.forEach((ele) => console.log("Iterated"));
// the above lop only iterated two times at index 4 and 9 only
//coz all the other underdefined values will be neglected

// object with keys apart from string
// remebeer even we are using keys apart from from strings those will be coverted back to
//strings with toString() method
const z = {
  name: "Bharath",
};
const keyArray = ["name"];
z[keyArray] = "New Name"; // here the kerArray will be converted to keyArray.toString()==>"name"
console.log(z);

(function () {
  console.log("Immediatlely invoked function expression");
})();

//multiple assignments

let a1 = (b1 = c1 = 20);
// here b1 and c1 is attached to global object and it is no more a let varibale
// here a1 is just a let varibale
console.log(delete c1); //true
console.log(delete b1); //true
console.log(delete a1); //false

//check this function

function data() {
  let a2 = (b2 = c2 = 100);
}
data();
console.log(c2); // gives 100 coz attached to global object
console.log(b2); // gives 100 coz attached to global object
// console.log(a2); gives reference error since it is not defined

const mapArray = [1, 2, 3];
mapArray[5] = 10;
const result = mapArray.map((ele) => ele * 2);
console.log(result); // [2,4,6,<2 empty slots>,20]

//freezing an object to make it immutable

const originalObject = {
  x: 5,
  y: 10,
};
Object.freeze(originalObject); // it makes the object to be immutable
originalObject.x = 100;
console.log(originalObject); // { x:5,y:10}

// during hoisting functions have more priority then varibale declarations

console.log(fun);
var fun = 10;
console.log(fun);

function fun() {
  console.log("inside function");
}
// fun();

// output : 10 and type error

// coz fun () have more priority and hoisted top
// after that it encounters fun=10 so its asigns 10 to it
// now when at line fun()   js engines tries to invoke the function but actuallt hear fun is number but not at all function
// so it result in type error
const mainArray = [1];
const returnedPush = mainArray.push(10);
console.log(returnedPush); // logs 2 which length of array

// letVariable = 20;
// console.log(letVariable); // reference eror " canot aces letvaribale before initialization"
// let letVariable;

console.log(5 < "15"); // ture coz '15'--> 15 and 5<15 is true
console.log("5" < "15"); // false coz in legographical evalutaion 5 comes after 1
console.log(false < "16"); // true coz false-->0 <16 -->true
console.log("5" < "15" < "16"); // true

// for (var i = 1; i <= 10; i++) {
//   function fun(j) {
//     setTimeout(() => console.log(j), j * 1000);
//   }
//   fun(i);
// }

//concat method will not return anew array or new string

const arr1 = [1, 2];
const arr2 = arr1.concat(3, 4);
const arr3 = arr1.concat([3, 4], [5, 6], [7, 8], 9, 10);
console.log(arr1); //[1,2]
console.log(arr2); // [1,2,3,4]
console.log(arr3); // [1,2,..,9,10]
