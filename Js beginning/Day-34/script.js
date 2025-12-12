// 7. Ask user's age and check if eligible to vote
// If age >= 18 -> "Eligible", else -> "Not Eligible"

// let age = prompt("user ki age batao");
// if (age === null) {
//     console.error("You cancelled it.");
// }
// else {
//     if (age.trim() === "") {
//         console.log("Please write something...");
//     }
//     else {
//         age = Number(age);
//         if(isNaN(age)) {
//             console.error("Please enter a number...");
//         }
//         else {
//             if (age >= 18) {
//                 console.log("You can vote");
//             }
//             else if (age < 0) {
//                 console.error("invalid age");
//             }
//             else console.log("You cannot vote");
//         }
//     }
// }



// 8. Print multiplication table of 5.
for(let i = 1; i<11; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}



// 9. Count how many numbers between 1 to 15 are greater than 8.
// Loop and count unconditionally.

let count = 0;
for(let i = 1; i < 16; i++) {
    if(i > 8) {
        count++;
    }
}
console.log(count);



// 10. Ask user for password and print access status
// Hardcoded correct password.

// let password = "heysakshii";
// let pass = prompt("password batao");
// if(pass === null) {
//     console.error("You cancelled it");
// }
// else {
//     if (pass === password) {
//         console.log("matched");
//     }
//     else {
//         console.log("not matched");
//     }
// }



// 11. Allow only 3 attempts to enter correct password.
// If user gets it right early, stop. If not -> "Account locked"

let attempts = 0;
let khulgaya = false;
let pass = "haysakshii";
let password = prompt("password batao");
attempts++;

if (password === pass) {
    khulgaya = true;
}

while (password !== pass) {
    if (attempts === 3) {
        console.error("Account locked");
        break;
    }
    password = prompt("password batao");
    attempts++;
    if (password === pass) {
        khulgaya = true;
    }
}

if (khulgaya === true) {
    console.log("account opened");
}