// OOP -> Object Oriented Programming
// code -> objects, classes, and functions

// Introduction to OOPs in JavaScript
// modular
// scalable
// manageable
// promise
// easy to fix
// code re-use

// Understanding `classes` and `objects` in JS
// ***** ek bande ki details ek saath rakhne ke liye, we have objects *****
let user1 = {
    name: "sarah",
    age: 20,
    email: "sarah@gmail.com",
    address: "abc fghmn 10loncj",
};

let user2 = {
    name: "satyam",
    age: 26,
    email: "sam30@gmail.com",
    address: "bcd 01 jjhskk",
};


// let name = "sarah";
// let age = 20;
// let email = "sarah@gmail.com";
// let address = "abc fghmn 10loncj"


// classes
// blueprint

// class -> saancha
// constructor -> automatic chalne waala function


class Remote {
    constructor(product, price, color) {
        this.product = product;
        this.price = price;
        this.color = color;
    }
    powerOn() {
        console.log("This machine is on now.");
    }
    powerOff() {
        console.log("This machine is off now.");
    }
}

let rem = new Remote("Lenovo", 2300, "grey");
// console.log(rem);



class BiscuitMaker {
    constructor() {
        this.name = "ParleG";
        this.price = 5;
    }
}

let bm = new BiscuitMaker();
// console.log(bm);



class AlooChaat {
    constructor() {
        this.price = 55;
        this.oil = "5ml";
        this.oilBrand = "Saffola";
        this.masale = ["dhaniya", "pudina", "mirch"];
    }

    pack() {
        console.log("aloo chaat packed");
    }

    unpack() {
        console.log("aloo chaat not packed");
    }
}

let ac1 = new AlooChaat();
ac1.pack();



class kitaab {
    constructor() {
        this.name = "science";
        this.price = 1200;
        this.author = "robert browns";
        this.color = "yellow"
    }

    paanaPalto() { }
    bookmarkLagao() { }
    padhlo() { }
}

let k1 = new kitaab("moral", 120, "white")
let k2 = new kitaab("computer science", 899, "gopi bahu", "red")
let k3 = new kitaab("constitution", 400, "green")



// Understanding `constructor` and `prototype` - [`this keyword`, `call`, `apply`, `bind`]

// constructor -> ek function jo automatic chalta hai jaise hi class se naya instance banaya jaata hai

class Human {
    constructor() {
        this.name = "sarah";
        this.age = 20;
    }
}

Human.prototype.saansLo = function() {
    console.log("hey");
};

Human.prototype.saansLo = function() {
    console.log("hey");
};s

let h1 = new Human();
let h2 = new Human();


// More topics in OOPs - [`class expression`, `hoisting`, `inheritance`, `getter and setter`]