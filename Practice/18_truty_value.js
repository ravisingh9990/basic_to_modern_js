//Falsy values 

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values 

// "0", 'false', " ", [], {}, function(){}





const userEmail = "ravi@mail.com";

if (userEmail) { //[], {}, " ", "0", 'false', function (){}
    console.log("Logged In");
}
else{
    console.log("Try again");
}


//check if array is empty 

if (arr1.length === 0) {
    console.log("empty array");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("empty object");
}


false == 0 //true
false == '' //true
0 == '' //true


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
// val1 = undefined ?? 15;
 val1 = null ?? 15 ?? 20; //The first value will be assigned

console.log(val1);



//Terniary Operator

condition ? true : false

const teaPrice = 20;
teaPrice <= 30 ? console.log("Buy") : console.log("Don't Buy");