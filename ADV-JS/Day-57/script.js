// class Bottle {
//     constructor() {
//         this.color = "blue";
//         this.material = "plastic";
//         this.price = 150;
//     }
//     fill() {}
//     drink() {}
// }

// let bt1 = new Bottle()
// let bt2 = new Bottle()


class Sketch {
    constructor() {
        this.character = "doraemon";
        this.color = "blue";
        this.someFnc = function() {};
    }

    speak() {}
    walk() {}
}

// Sketch.prototype.speak = function() {}
// Sketch.prototype.walk = function() {}

let sketch1 = new Sketch();




// this -> ek special keyword hota hai
// global -> window
console.log(this);

// function -> window
function abcd() {
    console.log(this);
}

abcd();

// es5 function inside object -> window
let obj = {
    name: "sakshi",
    func: function() {
        console.log(this.name); 
    },
};

obj.func();

// es6 function inside object -> window
let obj2 = {
    fnc: () => {
        console.log(this); 
    },
};

obj2.fnc();

// es5 function inside es5 function object -> window
let obj3 = {
    fnc: function() {
        function abcd() {
            console.log(this);
        }
        abcd();
    },
};

obj3.fnc();

// es6 function inside es5 function object -> object




// call apply bind
// call -> fnc chalata hai and this ki value set karta hai
// apply -> wahi karta hai jo call karta hai and arguments me pehli value this ki and doosri value array hoti hai
// bind -> wahi karta hai jo call karta hai and aapko naya fnc deta hai

let obj4 = {
    name: "sarah",
};

function abcd(a, b, c) {
    console.log(this,a,b,c);
}

let newfnc = abcd.bind(obj4,  1, 2, 3);

newfnc();