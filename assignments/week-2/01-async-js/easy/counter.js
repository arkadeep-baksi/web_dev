// Implementing a counter using setInterval
let counter = 1
setInterval(function (){
    console.log(`Current counter: ${counter}`);
    counter+=1;
}, 1000);

// Implementing a counter using setTimeout
function updateCounter(){
    console.log(`Current counter: ${counter}`);
    counter++;

    //Call updateCounter again after 1 sec
    setTimeout(updateCounter, 1000);
}

updateCounter();