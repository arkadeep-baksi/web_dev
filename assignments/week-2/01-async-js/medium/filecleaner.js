// Importing necessary libraries
const fs = require("fs");

// Function foor cleaning a file
function cleanFile(file){

    // Asynchronous File Read function
    fs.readFile(file, "utf-8", function(err, data){
        
        // Cleaned the data and wrote it back to the file
        const cleanData = data.replace(/\s+/g, ' ').trim();
        console.log(`Cleaned Data: ${cleanData}`);
        fs.writeFile(file, cleanData, function (){
            console.log("Cleaned the file");
        });
    });

}

cleanFile("file.txt");
// Below code should execute first showing the Asynchronous nature of File Read
let sum = 0;
for (let i = 0;i<=100000000; i++){
    sum+=i;
}
console.log(sum);