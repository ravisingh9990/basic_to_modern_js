let a = 10;
const b = 20;
var c = 300;
//Global Scope

if (true) {
    //Local scope
    let a = 10;
    const b = 20;
    var c = 30;

    // console.log(a);
    // console.log(b);
    // console.log(c);
}

console.log(a);
console.log(b);
console.log(c);

//Global variables can be accessed anywhere in the code
//Local varables have limited access (within the scope)


//Nested scopes

function one() {
    const username = "ravi chauhan";

    function two() {
        const website = "stockpedia";
        console.log(username);
    }
    console.log(website);

    two();
}

one(); 

//The above code will generate an error 'website is not defined' because we are trying to access
//the variable website out of its scope, that is declared locally in function two(), 
//removing or commenting the line 'console.log(website);' the code will print "ravi chauhan"
//because function one is calling the function two and function two is printing the variable username
//becase the function two is a child function of function one, and child can access the variable of it's 
//parent function.

//if you comment or remove the calling of function two(), then nothing will be printed
//because function two is never been called. 


//Scopes using if statement

if (true) {
    const username = "rc.chauhan";
    if (username == "rc.chauhan") {
        website = " stockpedia";
        console.log(`Name: ${username} Website: ${website}`);
    }
    // console.log(website); //errors of not defined
}
// console.log(username);//errors of not defined

//Output: Name: rc.chauhan Website:  stockpedia



//Ways to declare a funtion

console.log(addNum(5));//6, accessing the function before declaration, and it's working fine. 

function addNum(num) {
    return num + 1;
}

addNum(5);//The function is returning the value but printing it.


//Variable hoisting (accessing variables before it's initialization)

console.log(addNumbers(6));//error: can't access lexical declaration 'addNumbers' before initialization
const addNumbers = function(num) {
    return num + 5;
}

addNumbers(6);//The function is returning the value but printing it.

