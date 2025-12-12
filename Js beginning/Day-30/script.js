// Arithmetic Operators
    // 12 + 13 -> addition
    // 12 - 13 -> subtraction
    // 12 * 13 -> multiplication
    // 12 / 13 -> divison
    // 12 % 13 -> modulus
    // 2 ** 3 -> exponentiation


// Assignment Operators
    let a = 12;
    a += 13;
    a -= 13;
    a *= 2;
    a /= 2;
    a %= 3;


// Comparison Operators
    // 12 == '12' -> not strict compare NEVER USE THIS
    // 12 === '12' -> strict comare ALWAYS USE THIS
    // 12 != '12' -> NEVER USE THIS
    // 12 !== '12' -> ALWAYS USE THIS
    // 12 > 13
    // 12 < 13
    // 12 >= 12
    // 12 <= 13


// Logical Operators
    // &&
    // true && true = true
    // false && true = false
    // true && false = false
    // false && false = false

    // username === exist && password === userpassword

    // ||
    // true || true = true
    // false || true = true
    // true || false = true
    // false || false = false

    // ! not
    // !true -> false
    // !false -> true


// Ternary Operator
    // condition ? doThis : doThat
    12 > 13 ? console.log("hey") : console.log("hello");

// Type Checking Operators
    // typeof
    // instanceof

// String Operator
    // + (or concatenation)
    // "hello " + "everyone"

    // Spread / Rest Operator
    // ... (very important in Modern JS)

    // spread ...
    let arr = [1, 2, 3, 4, 5];
    let arr2 = [...arr];

    // rest ...
    // function abcd(a, b, c, ...rest) {

    // }

    // abcd(1, 2, 3, 4, 5);


// Nullish Coalescing Operator
    // ?? (fallback only when null / undefined)
    null ?? console.log("sorry");
    12 > 13 ?? console.log("sorry");


// Optional Chaining
    // ?. (safe access to nested values)
    let obj = {
        name: {
            first: "sakshi",
            second: {
                sf: "sharma",
                sl: "something",
            },
        },
    }

    // obj.name.first;
    console.log(obj?.name?.first);


// variable hoisting in JS
// hoisting ka matlab hai ki variable ko banane se pehle bhi use kiya jaa sakta hai
// hoisting me aapka variable toot jaata hai do hisso me
// declaration top of the file jaata hai
// initialization wahi rehta hai jaha variable tha
// ab aapka variable error nahi deta kyuki wo hamesha use hone se pehle exist kar raha tha
    console.log(b);
    var b = 12;

    // it will not work with let and const
    // bcoz of temporal dead zone (TDZ)