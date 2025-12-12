// setTimeout -> delay

// console.log("Hello 1");
// console.log("Hello 2");
// console.log("Hello 3");
// console.log("Hello 4");


// console.log("hello 1");
// setTimeout(function() {
//     console.log("hello 2");
// }, 1000)
// console.log("hello 3");


// var btn = document.querySelector("button")
// var h1 = document.querySelector("h1")

// btn.addEventListener("click", function() {
//     console.log("Button is clicked");
    
//     setTimeout(function() {
//         console.log("hello");
//     }, 2000)
// })

var grow = 0
var btn = document.querySelector("button")
var h2 = document.querySelector("h2")
var inner = document.querySelector(".inner")
btn.addEventListener("click", function() {

    btn.style.pointerEvents = "none"

    var num = 50 + Math.floor(Math.random()*50)
    console.log(num);
    

    var int = setInterval(() => {
        grow++
        h2.innerHTML = grow + "%"
        inner.style.width = grow + "%"
    }, num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = "Downloaded"
        btn.style.opacity = 0.5
    }, num*1000);
})