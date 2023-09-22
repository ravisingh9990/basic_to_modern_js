let mydate = new Date()

console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());

console.log(typeof(mydate));//Output: Object


//Create a new date

/*
NOTE: In js the month starts from 0 and ends at 11, (jan is 0, dec is 11).
If you use 12 for month it will return jan. (12 is jan, 13 will be feb, 14 will be mar and so onn)

This will only happen when you use single digit for month. like (let myCreatedDate = new Date(2023, 0, 12))
*/


// let myCreatedDate = new Date(2023, 0, 12)
// let myCreatedDate = new Date(2023, 11, 12)
let myCreatedDate = new Date(2023, 11, 12, 4, 6)

console.log(myCreatedDate);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString);


//To create specific date 
let specificDate = new Date("2023-01-15"); //YY/MM//DD not much prefered in india
console.log(specificDate);

let specificFormatDate = new Date("01-15-2023");// MM/DD//YY
console.log(specificFormatDate.toLocaleString());


//Time Stamp

let myTimeStamp = new Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//convert the time in seconds
//Date.now() function will return the current time in miliseconds and we have to divide it with 1000 to convert it into 
//seconds. but it will give you the time with decimals, so we have to floor it. with Math.floor().

console.log(Math.floor(Date.now() / 1000));


//Get the day or month from a date 

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);// +1 here is used because the month will start from 0 and normal user gets confused with that. 
console.log(newDate.getDay());



newDate.toLocaleString('default', {
    weekday: "long",
})