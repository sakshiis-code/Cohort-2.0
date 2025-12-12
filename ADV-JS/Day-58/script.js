class Animal {
    constructor() {
        this.hands = 2;
        this.legs = 2;
    }

    eat() { }
    breathe() { }
}

class Kekda extends Animal {
    constructor() {
        super();
        this.legs = 8;
        this.hands = 0;
    }

    something() { };
}

let k1 = new Kekda();


// inheritance

// class Marker {}
// class BlueMarker extends Marker {}


// ques 1.
// let user = {
//     name: "sakshi",
//     email: "sakshi@example.com",
//     login: function() {
//         console.log("Logged in");
//     },
// };

// user.login();


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    loggedIn() {
        console.log("logged in");
    }
}

let user1 = new User("Sakshi", "sakshi@example.com");
let user2 = new User("Sam", "sam1230@example.com");
let user3 = new User("Princy", "prrincyyyy@example.com");



// ques 2.

let product = {
    name: "cap",
    price: 3300,
    discountedPrice: function () {
        return this.price - 200;
    },
};

console.log(product.discountedPrice());



// ques 3.

class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    drive() {
        return (this.brand + " - " + this.speed);
    }
}

let car1 = new Car("Hyundai", 180);
let car2 = new Car("Maruti", 170);



// ques 4.

class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    introduce() {
        return (this.name + " " + this.rollNo);
    }
}

let st1 = new Student("Sarah", 20)


// ques

let obj = {
    sayName: function () {
        console.log(this);
    },

    sayArrowName: () => {
        console.log(this);
    },
};

obj.sayName();
obj.sayArrowName();




// ques 5.

function Users() {
    this.name = "sarah";
};

Users.prototype.loggedIn = function() {
    console.log("logged in");
}

let us1 = new Users();


