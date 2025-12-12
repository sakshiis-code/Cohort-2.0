// Write a function sayHello() that prints "Hello JavaScript".

// function sayHello() {
//     console.log("Hello JavaScript");
// }

// sayHello()


// Create a function add(a, b) that returns their sum and log the result.

// function add(a, b) {
//     return a + b;
// }

// let ans = add(1, 2);
// console.log(ans);


// Write a function with a default parameter name = "Guest" that prints "Hi <name>".

// function greeting(guest = "Guest") {
//     console.log(`Hi ${guest}`);
// }

// greeting();


// Use rest parameters to make a function that adds unlimited numbers.

// Method 1
// function addUnlimited(...nums) {
//     let sum = 0;
//     nums.forEach(function(val) {
//         sum += val;
//     })
//     console.log(sum);
    
// }

// addUnlimited(1, 2, 3)


// Method 2
// function addUnlimited(...nums) {
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }
// }

// addUnlimited(1, 2, 3);


// Method 3
// function addUnlimited(...nums) {
//     let ans = nums.reduce(function(acc, val) {
//         return acc * val;
//     }, 1);
//     console.log(ans);
// }

// addUnlimited(1, 2, 3);


// Create an IIFE that prints "I run instantly!".

// (function() {
//     console.log("I run instantly!");
// })();


// Make a nested function where the inner one prints a variable from the outer one.

// function parent() {
//     let a = 12;
//     function child() {
//         console.log(a);
//     }
//     child();
// }
// parent();


// Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let arr = ["apple", "guava", "grapes", "mango", "banana"];
// arr.push("pear");
// arr.unshift("orange");
// console.log(arr);


// Use a for loop to print all elements of an array

// let arr = [1, 2, 3, 4, 5, 6];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);    
// }


// Create an object person with keys name, age, and city, and print each key's value.

// let person = {
//     name: "sakshi",
//     age: 20,
//     city: "aligarh",
// };

// for(let key in person) {
//     console.log(person[key]);
// }


// Use setTimeout() to log "Time's up!" after 2 seconds.

setTimeout(function() {
    console.log("Time's up!");
}, 2000);