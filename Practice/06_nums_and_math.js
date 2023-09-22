//Declaring a variable score having a number, but it is automatically defined as number datatype
const score = 400
console.log(score);

//Explicitly difining a variable as number datatype

const balance = new Number(200);
console.log(balance);

//This will return the  object as {Number: 200}, You can access various number methods on the balance variable


//You can also convert the above varibale into a string and by doing this you will have access to all the string methods
//so you can check the lenth of the variable and other things that you can do with string methods.

console.log(balance.toString().length);
//Output: 3


console.log(balance.toFixed(2));
//This will minimize the precision value to only 2 digits after the point.
//Output: 100.00






//Using toPrecision
const newNumber = 23.8967
//You can give the prcision value between 1 to 21
console.log(newNumber.toPrecision(3));//Output: 23.9





const newNumber1 = 123.8967

//Here we are taking the precision of 3 values
console.log(newNumber.toPrecision(3));//Output: 124


//Be very cautious while using this method
const newNumber2 = 1123.8967
console.log(newNumber.toPrecision(3));//Output: 1.12e+3

//You should have the idea of the digits before the decimal.





//toLocaleString

const hundreds = 1000000

console.log(hundreds.toLocaleString());//Output: 1,000,000
console.log(hundreds.toLocaleString('en-IN'));//Output: 10,00,000


// ************************************************    Math Library  **********************************************************

console.log(Math);//Check it in the Browser console

//Using absolute function
//This will convert the negative value to it's positive absolute value
console.log(Math.abs(-4));//Output: 4

//But this will  not convert the postive value to negative 
//If you provide a positive value, it will output the same value.



console.log(Math.round(4.3));//Output: 4
console.log(Math.round(4.6));//Output: 5

//While rounding off a value, if you want to choose the value to be seclected should be uper or lower value
//You can do this by using the ceiling or floor methods (ceil, floor)

console.log(Math.ceil(4.2));//Output: 5
console.log(Math.ceil(4.8));//Output: 4
console.log(Math.min(4, 8, 3, 5));//Output: 3
console.log(Math.max(4, 8, 3, 5));//Output: 8



console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1); 


//Getting the value within a certain range

const min = 10;
const max = 20;

//This will return the value within the range of 10 to 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
