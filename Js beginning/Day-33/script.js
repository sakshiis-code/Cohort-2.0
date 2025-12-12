// Level 1 - Pure Beginner Practice

// 2. Print only even numbers from 1 to 20
// Use a loop and condition to print only even ones.

for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Print numbers from 10 to 1
// Reverse loop with a decrement

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 4. Print the word "Yes" 5 times
// Repeat using a loop.

for (let i = 1; i < 6; i++) {
    console.log("Yes");
}

// 5. Print whether numbers from 1 to 10 are even or odd
// For each number, check: even -> "Even", else -> "Odd"

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) console.log(`${i} is Even`);
    else console.log(`${i} is Odd`);
}

// 6. Ask user for a number and say if it's positive or negative
// Use prompt() and a conditional.

// parseInt
// Number
// +

// let num = Number(prompt("number batao"));
// if(num > 0){
//     console.log("Positive");
// } else console.log("Negative");

// 7. Ask user's age and check if eligible to vote
// If age >= 18 -> "Eligible", else -> "Not Eligible"

let age = prompt("age batao");
if (age === null) {
    console.error("You pressed cancel.");
}
else {
    if (age.trim() === "") {
        console.error("write carefully");
    } else {
        age = Number(age.trim());
        if (isNaN(age)) {
            console.error("Please enter a number");
        }
        else {
            if (age >= 18) {
                console.log("Eligible");
            }
            else console.log("Not Eligible");
        }
    }
}