// Callbacks

// Create Own Function 
// function krishAsyncFunc(value){
//     value("Hii there ")
// }
// async function main(){
//     krishAsyncFunc(function(data){
//         console.log(data)
//     })
// }
// main();

// Async Function And Sync Function
// Asyns is using setTimeout that kind of Function use cause multiple thing do word at each other time.
// Sync is one by one to word of the logic.

// Promise

// Create new Promise
const fs = require('fs');

function krishAsyncFunc(){
    let x = new Promise(function(resolve){
        fs.readFile("a.txt","utf-8", function(err,data){
            resolve(data)
        })
    })
    return x;
}

function main(){
    const ofValue = krishAsyncFunc().then(function(dataOfMain){
        console.log(dataOfMain)
    })
}
main();

// Async / await
const fs = require('fs')

function krishAsyncFunc(){
    x = new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err,data){
            resolve(data)
        })
    })
    return x;
}

async function main(){
    const value = await(krishAsyncFunc())
    console.log(value)

}
main();