// Introducing let, var, and const keywords
let a = 2;
var b = 1;
const c = 2;

a = 5;
b = 10;

// console.log is basically the print statements
console.log(a);
console.log(b);
console.log(c);

// Below will give error if not commented
// c = 23
// console.log(c)

// String concatenation, JS is not strictly typed
let firstName = "Arkadeep";
let age = "27";
let isMarried = false;

console.log("Name of Person: " + firstName + "\nAge is: " + age);

// If else statements
if (isMarried == true){
    console.log(firstName + " is married");
}
else{
    console.log(firstName + " is not married");
}

// For loops in JS
let answer = 0;
for (let i = 0; i<=100; i++){
    answer += i;
}
console.log(answer);

// The Object Datatype
// The object data type can contain both built-in objects, and user defined objects:
// Built-in object types can be:
// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

// Javascript Arrays
let ages = [12, 23, 45];
let names = ["A", "B", "C"];
for (let i = 0; i<ages.length; i++){
    console.log("Person: " + names[i] + ", Age: " + ages[i]);
}

// Javascript Objects
const users = {
    firstName : "Arkadeep",
    age : 27,
    gender : "male"
};
console.log(users["firstName"]);

// Array of Javascript Objects
const users_data = [{
    firstName : "A",
    age : 27,
    gender : "male"
}, {
    firstName : "B",
    age : 28,
    gender : "female"
}];
for (let i = 0; i<users_data.length; i++){
    if (users_data[i]["gender"]=="male"){
        console.log(users_data[i]["firstName"]);
        console.log(users_data[i].firstName);
    }
}

// Functions in Javascript
function sum(a, b) {
    // do things with input and return the output
    return a + b;
}
console.log(sum(100, 200));

// Functions can take other functions as input: Callbacks - Function Calling back a different function
function square(x) {
    return x*x;
}

function sqaureOfSum(a, b, fnToCall){
    return fnToCall(a+b);
}

console.log(sqaureOfSum(2,3, square));

// SetTimeout Callback
function greet(){
    console.log("Hello");
}
// This accepts two arguments fn, time-> Runs fn after time secs
setTimeout(greet, 3*1000);