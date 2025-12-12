// Introduction to Error Handling
// Common types of errors in JavaScript - [`Syntax errors`, `Runtime errors`, `Logical errors`]
// Understanding the Error object - [`message`, `name`, `stack`]
// Handling exceptions using `try-catch`, `try-catch-finally`
// How to Throw errors in JavaScript
// Error Handling in Asynchronous Code


// syntax error -> aapne code me likhte waqt galti kardi
// leat a = 12;
// format me galti


// runtime error -> code likhte waqt error nahi hai, chalte waqt hai

// function abcd() {
//     let a = 12;
//     console.log(a.name.first);
// }

// abcd()


// logical error -> aapke code ko kuch karna chahiye tha, par wo kar kuch aur raha hai

// function add(a,b) {
//     return a - b;
// }

// console.log(add(1, 5));


// try {
//     let a= 12;
//     console.log(a.age.name);
    
// } catch (err) {
//     // console.log(err.message);
//     // console.log(err.name);
//     console.error(err.stack);
// } finally {
//     console.log("heyy");
// }



try {
    let a = 12;
    console.log(a.name.age);
} catch (err) {
    // throw new Error("Something went wrong!")
    console.error(new Error("Something went wrong from our side, please wait for some time."));
}