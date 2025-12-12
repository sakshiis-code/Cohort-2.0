// promises
// async wait
// settimeout and setinterval

// promises -> ek kaam jaake karo
// pending state
// ho jaayega -> resolved
// nahi hoga -> reject


// let prm = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// })

// prm.then(function () {
//     console.log("resolved");
// })

// prm.catch(function () {
//     console.log("rejected");
// })



// fetch(`https://randomuser.me/api/`)
//     .then(function (notReadableData) {
//         return notReadableData.json();
//     })
//     .then(function (asliData) {
//         console.log(asliData.results[0].name.first);
//     })



// fetch(`https://randomuser.me/api/`)
//     .then((raw) => raw.json())
//     .then((data) => {
//         console.log(data.results[0].name.first);
//     })
//     .catch((err) => {
//         console.log(err);
//     })



// async function abcd() {
//     let raw = await fetch(`https://randomuser.me/api/`);
//     let data = await raw.json();
//     console.log(data.results[0].email);
// }

// abcd();



// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10);
//             if (num > 5) {
//                 resolve(true);
//             } else reject(false);
//         }, 3000);
//     })
// }

// async function xyz() {
//     let v = await getNum();
//     console.log(v);
// }

// xyz();