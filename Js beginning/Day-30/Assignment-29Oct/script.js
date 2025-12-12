// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,Comparison, Logical, Bitwise)

// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

let a = 10, b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1

// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

let x = 5;
x = x + 3; // 8
x += 3; // 11
x -= 3; // 8
x *= 3; // 24
x /= 3; // 8

// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count--

let count = 5;
console.log(count++); // 5
console.log(count); // 6
console.log(++count); // 7
console.log(count); // 7

console.log(count--); // 7
console.log(count); // 6
console.log(--count); // 5
console.log(count); // 5

// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

console.log(5 == "5"); // true, coz == gives not strict comparison
console.log(5 === "5"); // false, coz === gives strict comparison

// e. Check if 10 is greater than 5, less than 20, and equal to 10.

console.log(10 > 5); // true
console.log(10 < 20); // true
console.log(10 === 10); // true

// f. Try logical AND and OR:
// true && false
// true || false
// !(true)

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

console.log(5 > 3 && 10 > 8); // true && true -> true
console.log(5 > 3 || 10 < 8); // true || false -> true

// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).

// 5 -> 101
// 1 -> 001
// & -> gives 1 only when both bits are 1.
// | -> gives 1 when any one bit is 1.

console.log(5 & 1); // 1
console.log(5 | 1); // 5


// 2. Variable Hoisting in JS

// a. Predict output of:
console.log(a2); // undefined
var a2 = 10

// b. Predict output of:
// console.log(b2); // reference error
let b2 = 10

// c. Predict output of:
test()
function test() { console.log("Hello") } // Hello

// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { console.log(“Hi”) }
// Write what happened and why.

// hello()
var hello = function () { console.log("Hi") } // JS hoists variable declarations to the top, but not the value or function expression

// Function declarations are hoisted with their body.
// Function expressions (like var hello = function() {}) are not.
// That’s why calling it before definition gives an error.

// e. Write one sentence:
// What gets hoisted? => Function declarations are fully hoisted (name and body).
// What does not get hoisted fully? => Variable declarations and function expressions are hoisted only by name, not by their assigned value.


// 3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

// let age = Number(prompt("Enter your age: "));
// if (age > 18) {
// console.log("Adult");
// } else {
// console.log("Minor");
// }

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

// let pr = (prompt("Enter your marks: "));
// let marks = Number(pr);
// if (isNaN(marks)) {
//     console.log("invalid input");
// } else if (marks >= 90) {
//     console.log("A grade");
// } else if (marks >= 75) {
//     console.log("B grade");
// } else if (marks >= 50) {
//     console.log("C grade");
// } else {
//     console.log("Fail");
// }

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

let city = "Bhopal";
if (city === "Bhopal") {
    console.log("MP");
} else if (city === "Delhi") {
    console.log("Capital");
} else {
    console.log("Unknown City");
}

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary

let score = 40;
score > 35 ? console.log("Pass") : console.log("Fail"); // Pass

// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

let temperature = 50;
temperature > 30 ? console.log("Hot") : console.log("Pleasant"); // Hot

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

let day = 7;
switch (day) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default: console.log("Invalid Day");
}

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

let age = 12;
let country = "India";
if (age > 18 && country === "India") {
    console.log("Eligible for vote");
} else {
    console.log("Not Eligible");
}