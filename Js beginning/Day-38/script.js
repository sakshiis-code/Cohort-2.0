// ### 13.Functions in Js
// More Functions in Js - Anonymous,Higher Order, Callback, First Class, Pure Function, Impure Function

// pure function ek aissa function 
// same input = same output
// koi side effect nahi hoga

// let a = 12;
// function abcd(val) {
//     console.log(val+2);
// }
// abcd(12);
// abcd(12);
// abcd(12);
// abcd(12);


// impure function
// same input = different o/p ho sakta hai
// koi na koi side effect ho sakta hai

// let a = 12;
// function abcd(val) {
//     console.log(Math.random() + val)
// }
// abcd(12);
// abcd(12);
// abcd(12);
// abcd(12);


// Understanding Scoping in Js - Global scope, Function scope

// let a = 12;

// function abcd() {
//     let b = 134;
// }


// Understanding Closures , Scoping Rule

// closure -> ek function hai jo return karta hai function, but returning function jo hai wo parent function ka koi variable use karega
// closure -> hof

// function abcd() {
//     let a = 12;
//     return function() {
//         console.log(a);
//     }
// }


// Arrays in Js and how to create an Array.
// arrays->
// ek se zyada members rakhne ki jagah

// let arr = [10, 20, 30, 40, 50, 60];
// console.log(arr[5]);

// let arr = [];
// let arr2 = new Array();


// Understanding How to Accessing Elements in Array.
// let arr = [1,2,3,4,5];
// arr[2];


// Functions on Arrays - push, pop, shift, unshift, indexOf, array destructuring, filter, some, map, reduce, spread operator, alice, reverse, sort, join, toString

// let arr = [1,2,3,4,5];
// arr.push(6);
// arr.pop();
// arr.shift();
// arr.unshift(0);
// arr.indexOf(3);
// let [a, ,b] = arr;

// let arr = [1, 2, 3, 4];
// let arr2 = arr.filter(function(val) {
    //     return val<3;
    // })
    
// let arr = [1, 2, 3, 4];
// let arr2 = [...arr];


// Iterating Over Arrays using - For Loop, forEach Loop

// let arr = [1,2,3,4];
// for (let i = 0; i < 4; i++) {
    //     console.log(arr[i]);
    // }


// Understanding what are Objects in Js - key-value pair

// let obj = {
//     name: "sarah",
//     age: 20,
//     email: "abc@gmail.com",
// };

// let obj2 = new Object();


// Creating Objects, Accessing Properties, Deleting Property and Nested Objects

let obj = {
    name: "sarah",
    age: 20
}

console.log(obj['name']);
console.log(obj.name);

delete obj.age;


let obj2 = {
    name: "sarah",
    socials: {
        instagram: "bajjx",
        facebook: "hbvxhgas"
    }
}