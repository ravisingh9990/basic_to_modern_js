//Imediately Invoked Function Expressions (IIFE)

//IIFE is used to prevent the pollution causing through the global variables
//Used to execute the funtion immidiately
//Wrap the function in parentheses and use the parenthese immidiately after the function

(function chai() {
    //Named IIFE (chai)
    console.log(`D B connected`);
})();//This semicolon is very important 

//This funtion will not work because the execution of the above function is not ended yet,
//To end the above function we have to add a semicolon after the function
(() => {
    console.log(`D B connected to client`);
})();//This semicolon is very important 


//Passing the argument 

((name) => {
    console.log(`D B connected to ${name}`);
})("Ravi");



