// 11. Allow only 3 attempts to enter correct password.
// If user gets it right early, stop. If not -> "Account locked"

// let sahipassword = "sakshiii";
// let userpassword = prompt("apna password batao");
// let attempt = 1;

// while (attempt < 3 && sahipassword !== userpassword) {
//     attempt++;
//     userpassword = prompt("apna password batao");
// }

// if (attempt === 3 && sahipassword !== userpassword) {
//     console.error("Account locked!");
// } else {
//     console.log("Done");
// }



// 12. Ask user for words until they type "stop". Count how many times they typed "yes".
// Loop until "stop" is typed. Count "yes".

// let word = prompt("word bolo");
// let counter = 0;

// while (word !== "stop") {
//     if (word === "yes") counter++;
//     word = prompt("word bolo");
// }

// console.log(`total times yes count : ${counter}`);



// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for(let i = 1; i < 51; i++) {
//     if (i%7 === 0) {
//         console.log(i);        
//     }
// }



// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let sum = 0;
for(let i = 1; i < 31; i++) {
    if (i%2 !== 0) {
        sum = sum + i;
    }
}
console.log(sum);



// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let num = Number(prompt("number batao"));
// while (num%2 !== 0) {
//     num = Number(prompt("number batao"));
// }



// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start = Number(prompt("start"));
// let end = Number(prompt("end"));

// if (start>end) {
//     console.error("start cannot be bigger than end!");
// }

// for(let i = start; i < end+1; i++) {
//     console.log(i);
// }



// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

let counter = 0;
for(let i = 1; i < 21; i++) {
    if (counter === 3) {
        break;
    }
    if (i%2!==0) {
        console.log(i);
        counter++;
    }
}