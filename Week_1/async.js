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
    console.log("Hi There !!")
}

// Asynchronous Javascript Web API Function: setTimeout, FileRead, etc.
setTimeout(greet, 50)
// Above is an async call: OS will tell the JS Thread to go ahead and do other job while it performs the above function
// JS Thread will proceed ahead and do all the other stuffs 

console.log(sumOfPowers(2,3,square))
console.log(sumOfPowers(2,4,square))
console.log(sumOfPowers(2,6,square))

// Another synchronous job for the node process to perform
// The output from the asynchronous function will appear after this
for (let i = 0; i<10000000000;i++){

}
