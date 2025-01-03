// Callbacks
// Example 1
function square(x){
    return x*x;
}
function cube(x){
    return x*x*x;
}
function sumOfPowers(x,y,fn){
    return fn(x) + fn(y);
}
function greet(){
    console.log("Hi There. Inside setTimeout async call. !!");
}

// Asynchronous Javascript Web API Function: setTimeout, FileRead, etc.
setTimeout(greet, 50);
// Above is an async call: OS will tell the JS Thread to go ahead and do other job while it performs the above function
// JS Thread will proceed ahead and do all the other stuffs 

console.log("Sum of squares of 2,3: " + sumOfPowers(2,3,square));
console.log("Sum of squares of 2,4: " + sumOfPowers(2,4,square));
console.log("Sum of squares of 2,6: " + sumOfPowers(2,6,square));

// Another synchronous job for the node process to perform
// The output from the asynchronous function will appear after this
for (let i = 0; i<1000000000;i++){

}

// Example 2
const fs = require("fs");

// Asynchronous File Read
fs.readFile("file.txt", "utf-8", function(err, data){
    console.log(data);
})

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