/**
 * Js Promises
 *
 * - Way there to Execute JS
 *
 * 1. Synchronous Execution - Line By Line  [ Js Default Behaviour ]
 *
 * 2. Asynchronous Execution - [ if it takes some Time that is Asynchronous Opration ]
 *
 * fetch() - API CALL [ Promise ]
 *
 * - Promise is a way to handle Asynchronous Operations
 * 
 * State :
 *  - Pending
 *  - Fulfilled
 *  - Rejected
 *  **/

// const url = 'https://jsonplaceholder.typicode.com/todos/'

// const data = fetch(url) // Promise - Asynchronous Execution
// console.log(data)

/**
 * What is the Way to Handle Promises
 * 1. THEN / CATCH  [ Before ES6 ] - WAY 1 - 
 *  [ Promise Chaning]
 * 2. Async / Await [ After ES6 ]  - WAY 2
 *  */

const url = "https://jsonplaceholder.typicode.com/todos/";

// Promise - Asynchronous Execution
const data = fetch(url)
 // - Asynchronous Execution - Promise [ Pending ] - Reject ,  Fulfilled
  .then((response) => {
    return response.json()
    // return response.json(); // Asynchronous Execution - Promise [ Pending ] - Reject , Fulfilled
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });



console.log(data);
