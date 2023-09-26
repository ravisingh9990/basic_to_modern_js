const sayMyName = function(){
    console.log("R");
    console.log("a");
    console.log("v");
    console.log("i");
};

sayMyName(); 

/*Output: 
R
a
v
i
*/

//Reference and Execution of the function

const greeting = function(){
    console.log("Hello");
}

greeting //It is just a reference of the function 
greeting() //It is the execution of the function


//Calling a function without passing the arguments
//Variables passed in the function parentheses while declaring a function are called 'PARAMETERS'.
//Inputs provide to the function parentheses while calling the function is called 'ARGUMENTS'

const addMyNum = function(num1, num2){
    console.log(num1 + num2);
}

addMyNum()//NaN


//Passing the string as function arguments in place of numbers
const addNum = function(num1, num2){
    console.log(num1 + num2);
}

addNum("hello", "moto");//hellomoto
addNum(4, "3");//43
addNum("4", 3);//43



//Using console log and retrun statement
const addTwoNum = function(num1, num2){
    console.log(num1 + num2);
}

const result = addNum(4, 5);//prints 9 on console
console.log("Result: ", result);//Undefined


//Returning the result using retrun statement
const add2Nums = function(num1, num2){
    // const result = num1 + num2;
    // return result;

    return num1 + num2
}

add2Nums(4, 2);//6


const loggingUserMessage = function(user) {

    return `${user} just logged in`;
};

console.log(loggingUserMessage("Ravi"));//Ravi just logged in
console.log(loggingUserMessage(""));// just logged in
console.log(loggingUserMessage());//Undefined just logged in



//To avoid the case of retrunig undefined just logged in 
//we can check if the user has enterd a value or not, using if condition

const logginMsg = function(user) {

    // if (user === undefined) {
    //     console.log("Please enter a username");
    //     return //By using return here will not execute the below code
    // }

    if (!user) {
        console.log("Please enter a username");
        return //By using return here will not execute the below code
    }
    return `${user} just logged in`;

};


console.log(logginMsg());//Please enter a username



//Using the Default value if the user doesn't provide a value 

const lgnMsg = function(user = "Guest user") {

    if (!user) {
        console.log("Please enter a username");
        return //By using return here will not execute the below code
    }
    return `${user} just logged in`;

};

console.log(lgnMsg());//Guest user just logged in



//Functions with objects

//Simple function that is taking a limited amount of arguments
const calCartPrice = function(amount) {
    return amount;
}


//Problem here is, it will return only a single value (first one)
console.log(calCartPrice(200, 400, 500,));//200



//using the rest operator to take unknown number of values that user can provide 

const calculateCartPrice = function(...amount) {
    return amount;
}

//Returning an array of unknown amount of data
console.log(calculateCartPrice(200, 400, 500,));//[ 200, 400, 500 ]


//
const CartPrice = function(value1, value2, ...amount) {
    return amount;
}

//The first 2 values will be assigned to vlaue1 and value2 parameters provide in function declaration
console.log(CartPrice(200, 400, 500,));//[ 500, 600, 200 ]


//Passing objects to a function

const userobj = {
    username : "Ravi",
    email : "ravi@mail.com"
};

function handleObject(anyobj) {
    console.log(`Hello username is ${anyobj.username} and email is ${anyobj.email}`);
}

//passing the object using string interpolation
handleObject(userobj);//Hello username is Ravi and email is ravi@mail.com

//Directly passing the object to function
handleObject({
    username: "Rana",
    email: "haryana@mail.com"
})//Hello username is Rana and email is haryana@mail.com


//Accessing a value from an array

const newArray = [20, 50, 40, 30, 60];

function returnSecondValue(getArray) {
    return getArray[1];
}

//Passing the array using variable
console.log(returnSecondValue(newArray));//50

//Passing the array directly in function argument
console.log(returnSecondValue([200, 500, 400, 300, 600]));//500
