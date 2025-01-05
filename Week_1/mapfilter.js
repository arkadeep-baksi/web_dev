// Normal function
function sum(a,b){
    return a+b;
}

// Arrow function: There is a difference from the normal function in how things gets binded over here
const arrowsum = (a,b) => {
    return a+b;
}

// Map Function
// Problem: Given an array, multiply all the elements with 2

const input = [1, 2, 3, 4, 5, 6];
const ans = input.map((n)=>{return 2*n});
console.log(ans);

// Filter Function
// Problem: Given an array, find all the even numbers

const array = [1, 2, 3, 4, 5, 6];
const res = array.filter((n)=>{
    return n%2==0;
})
console.log(res)