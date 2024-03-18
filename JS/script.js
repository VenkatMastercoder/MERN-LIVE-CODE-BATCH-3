console.log("Hello World"); // Line 1  -> Process Core 1
console.log("Line 2"); // Line 2 -> Process  Core 1

// Variable

let message = "Hello World from Let";

message = "New message";

var message2 = "Hello Form Var"; // Global Scope

message2 = "NEW message fROM Var";

const pi = 3.14;

var a = "drjrgnd";

{
  let a = "Form Block";
  var b = "From Block";
  console.log("let:", message);
  console.log("var:", message2);
}

console.log(b);

// ctrl + ?

// Single Line

/**
 * Multi
 *
 * **
 * */

let x = 5;
let y = 5;

let sum = x + y;
let sub = x - y;
let mul = x * y;
let div = x / y;

console.log("ans:", sum);
console.log("Sub", sub);
console.log("Mul", mul, div);

let d = 5;
let r = 6;
let pre = ++r;
let post = pre++;

console.log("post:", post);
console.log("pre:", pre);

let num = 5;
let names = "venkat";
let bol = true;
let ans = null;

console.log(num, names, bol, ans);

// Function Declaration

function add(a, b) {
  console.log("Function Called");
  console.log(a + b);
}

function area(a, b) {
  console.log(a * b);
  console.log("Area Function");
}

// add(); // Call in JS

add(5, 5);

area(2, 2);

let val = 5;

if (val == 5) {
  console.log("if Block");
} else {
  console.log("Else Block");
}

// intial Val ; condition ; incr
for (let a = 0; a < 100; a = a + 1) {
  console.log(a)
}
