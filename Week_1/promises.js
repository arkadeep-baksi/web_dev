// Asynchronous Javascript
// Example 1
const fs = require("fs");

// Asynchronous File Read
fs.readFile("file.txt", "utf-8", function(err, data){
    console.log(data);
})
// Synchronous Javascript code
let sum = 0;
for(let i = 0; i<500;i++){
    sum += i;
}
console.log("Sum is: " + sum);

// Our own implementation of an asynchronous function
// It is just a wrapper on top of another async function, which is fine.
// Usually all async functions you will write will be on top of JS provided async functions like setTimeout or fs.readFile

function customReadFile(fn, file){
    fs.readFile(file, "utf-8", function(err, data){
        fn(data);
    });
}

function onDone(value){
    console.log(value);
}

customReadFile(onDone, "file.txt");

// Callback Hell: Nested Callbacks - Unnecessary indentation
setTimeout(function (){
    console.log("Hello Inside first setTimeout !!");
    setTimeout(function (){
        console.log("Hello inside second setTimeout !!");
    }, 3000)
}, 4000)

// Promises
// Syntactical Sugar: It is just a class that makes callbacks and async functions slightly more readable
// Doesn't accept any callback, returns something
// Promises => promise chaining, async await

// Promisified setTimeout
function promisifiedSetTimeout(duration){

    const p = new Promise(function(resolve) {
        setTimeout(function (){
            resolve();
        }, duration);
    });
    return p;
}

const timer = promisifiedSetTimeout(2000);
console.log(timer);
// calling a promisified asynchronous function
// Assume resolve will get replaced with the function you are calling with then
timer.then(function (){
    console.log("Hi There. Inside Promise !!")
});

// Promisified FileReader
function promisifiedReadFile(file){

    const reader = new Promise(function(resolve){
        fs.readFile(file, "utf-8", function(err, data){
            resolve(data);
        });
    })
    return reader;
}
fileReader = promisifiedReadFile("file.txt");
fileReader.then(function (data){
    console.log("Data of File:" + data);
})