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
let answer = 0
for (let i = 0; i<=100; i++){
    answer += i;
}
console.log(answer);

// The Object Datatype
// The object data type can contain both built-in objects, and user defined objects:
// Built-in object types can be:
// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

let ages = [12, 23, 45];
let names = ["A", "B", "C"];
for (let i = 0; i<ages.length; i++){
    console.log("Person: " + names[i] + ", Age: " + ages[i]);
}