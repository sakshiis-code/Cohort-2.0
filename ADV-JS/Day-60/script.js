// function getUser(username, cb) {
//     console.log("getting user details..");
//     setTimeout(() => {
//         cb({id: 1, username: "sarah"});
//     }, 1000);
// }

// function getUserPosts(id, cb) {
//     console.log("getting user posts..");
//     setTimeout(() => {
//         cb(["hello", "good day", "thank you"]);
//     }, 2000);
// }

// getUser("sarah", function(data) {
//     getUserPosts(data.id, function(allposts) {
//         console.log(data.username, allposts);
//     })
// })




// SCENARIO 1: Array Transformation Using a Callback
function transformArray(arr, cb) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        const currentIndex = i;

        let returnedValue = cb(currentElement, currentIndex, arr);
        result.push(returnedValue);
    }
    return result;
}

console.log(transformArray([1, 2, 3], (num) => num * 3));