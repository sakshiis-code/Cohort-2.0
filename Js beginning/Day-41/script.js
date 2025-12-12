// Write a higher-order function runTwice(fn) that takes another function and executes it two times.
// function runTwice(fn) {
//     fn();
//     fn();
// }

// runTwice(function() {
//     console.log("Hello");
// });


// Create one pure function that always returns the same output for given input, and one impure function using a global variable.
// function pure(a, b) {
//     console.log(a+b);
// }

// pure(1, 2)
// pure(1, 2)


// let global = 0;
// function impure(a, b) {
//     global++;
//     console.log(a + global);
// }

// impure(2);
// impure(2);


// Write a function that uses object destructuring inside parameters to extract and print name and age.
// function abcd({name, age}) {
//     console.log(name, age);
// }

// abcd({name: "sakshi", age: 20});


// Demonstarte the difference between normal function and arrow function when used as object methods (this issue).
// let obj = {
//     name: "sakshi",
//     fnc: function () {
//         console.log(this);
//     },
//     fnc2: () => {
//         console.log(this);  
//     },
// };

// obj.fnc();
// obj.fnc2();


// Give an array of numbers, use map() to create a new array where each number is required.
// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.map(function(val) {
//     return val * val;
// })

// console.log(newarr);


// Use filter() to get only even numbers from an array.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newarr = arr.filter(function(val) {
//     return val%2 === 0;
// })


// Use reduce() to find the total salary from an array of numbers [1000, 2000, 3000].
// let salary = [1000, 2000, 3000];
// let ans = salary.reduce(function(acc, val) {
//     return acc + val;
// }, 0)


// Create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 chars).
let names = ["avi", "harsh", "nishu", "abhishek", "polina", "tanuj"];

let ans = names.some(function(val) {
    return val.length > 3;
});


// Create an object user and test the behavior of Object.freeze() and Object.seal() by adding/changing keys.
// let user = {
//     name: "sakshi",
//     age: 20,
//     email: "sakshi@h",
// }

// Object.freeze(user);
// user.name = "sarah";
// user.social ="instagram"


// Create a nested object (user -> address -> city) and access the city name inside it.
let obj = {
    user: {
        name: "Sakshi",
        address: {
            city: "Aligarh",
        },
    },
};

let {city} = obj.user.address;