// Array
let items = ["name", 1, true];

// console.log(items)

// Spread - unpack into individual Elements  [ ...name ]

// 1. Array with Spread
let arr1 = [2, 3];
let arr2 = [1, ...arr1, 4]; // [1,2,3,4]

// console.log(arr2)
let newArray = [1, 2, 3];

// 2 . Creating a Copy
let arr3 = [...newArray]; // [1,2,3]

// 3. Concatenation
let a = [1, 2, 3];
let b = [5, 6, 7];
let c = [...a, ...b]; // [1,2,3,5,6,7]

// Object

let person = { name: "venkat", age: 1 };

// 1. Object with Spread

let x = { ...person, gender: "bjp" }; // { name: "venkat", age: 1,gender:"bjp" };

// 2. Creating a Copy
let personDetails = { ...person }; // { name: "venkat", age: 1 };

// 3 .Concatenation
let address = { city: "chennai", pincode: "600001" };
let fullPersonDetails = { ...person, ...address };
// console.log(fullPersonDetails);

// Function

// normal  - // Parameters
function add(a, b) {
  return a + b;
}

// ES6 New Way of Creating Function
const sub = (a, b) => {
  return a - b;
};

// how to Call a Function or Method
add();
sub();

// How to Pass Value to Function
const ans = add(5, 5); // Arguments
sub(10, 5); // Arguments

// Speard with function
let number = [1, 2, 3, 4, 5, 6];
let newAns = add(...number); // add(1,2,3,4,5,6)
console.log(newAns);

// Rest - it help Pack the Element into an Array [] - rest oper is used when we do not know no of element in Arg passed to function [...anyname]

function add2(a, b, ...e) {
  // rest
  console.log("::", a, b);
  console.log("e:", e);
}

let number2 = [1, 2, 3, 4, 5, 6, 7];
add2(...number2); // add(1,2,3,4,5,6,7) // Spread

// 1. Array
// Destructuring of Array [ onfly ]

let [w, z, ...rest] = [1, 2, 3, 4];

let [t, v, ...say] = [1, 2, 3, 4, 5, 6]; // Rest

console.log("Array5:", say);

console.log(w); // 1
console.log(z); // 2
// console.log(r);

// 2. object
// Destructuring of object [ onfly ]
let { name, age, ...xyz } = { name: "venkat", age: 1, gender: "dijb" };

// name
console.log(name);
console.log(age);
console.log(xyz);

// Possible Mistakes

// 1 . Always the rest Operate will come at Last or A rest parameter must be last in a parameter list.

let { product, productName } = { product: "1", productName: "Car" };

// console.log(cart.productName)
// console.log(cart["productName"])
console.log("-------------")
console.log(product)
console.log(productName)