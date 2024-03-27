// Array
const number = [1, 2, 3, 4, [1, 2]];
const fruits = ["apple", "cherry", "orange"];

// Arraow Function
const a = () => {
  return 5;
};

// an - () => {}

// for Loop
// for (let i = 0; i < number.length; i = i + 1) {
//   console.log(i);
// }

// ForEach - in order of each element
// fruits.forEach((e)=>{
//   console.log(e)
// });

// Map - exe like a for loop ,
// Map will Always Returns as An New Array
// syntax - arrayName.map(()=>{}) - new []
// const ans = fruits.map((items,index)=>{
//   console.log(items,index)
// })

// filter - for loop + we Add Condition - output in form : []
// syntax - arrayName.filter(()=>{ return condition }) - new []
// const filterAns = fruits.filter((items) => {
//   return items !== "apple";
// });
// console.log(filterAns);

// reduce -
// loop 1 - value : accumulator
// loop 2 - value : currentValue
console.log(number);
const ans = number.reduce((accumulator, currentValue) => {
  console.log("a:", accumulator);
  console.log("b:", currentValue);
  return accumulator - currentValue;
});
// [1,2,3,4]
// [3,3,4]
// [6,4]
// [10]
console.log(ans);

// rest , spread , des array & object , map , filter

// Some More Array Method

console.log("======== OTHER METHOD =========");
// console.log(number.reverse());
// [1, 2, 3, 4,[1,2]]; ==>  [1, 2, 3, 4,1,2];
console.log(number.flat());

/**
 * Types of Array Methods
 * 1. Mutable [ it will change the Original Array ]
 *    - pop()
 *    - push()
 *    - reverse()
 * 2. Immutable [ it wil not change the Original Array ]
 *    - flat()
 *    - map()
 *    - filter()
 *    - reduce()
*/

const names = "raj-kumar "

console.log(names.length)
console.log(names.toLowerCase()) // UpperCase to LowerCase
console.log(names.toUpperCase()) // LowerCase to UpperCase
console.log(names.split("-")) // it will give as an New Array
console.log(names.includes("-")) // true or false
console.log(names.trim()) //