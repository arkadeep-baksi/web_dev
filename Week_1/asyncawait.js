// Promise
const fs = require("fs");

function promisifiedFileRead(file){

    const reader = new Promise(function(resolve){
        console.log("Inside the Promise: 2");
        fs.readFile(file, "utf-8", function (err, data){
            console.log("Inside the Promise: 4");
            resolve(data);
        });
    });
    return reader;
}
console.log("-------------------------------------");

function read(){

    const fileReader = promisifiedFileRead("file.txt");
    console.log(fileReader);
    fileReader.then(function(value){
        console.log(value);
    });
}
console.log("Before Calling the promisified read function: 1");
read();
console.log("After promisified read function call: 3");
console.log("-----------------------------------------------");

// Async Await Syntax
async function awaitread(){

    // No Callbacks, No promises.then
    const fileReader = await promisifiedFileRead("file.txt");
    console.log("Data: 5\n" + fileReader);
    
}
console.log("Before Calling the await read function: 1");
awaitread();
console.log("After await read function call: 3");
console.log("-----------------------------------------------");
