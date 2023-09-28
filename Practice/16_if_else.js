const score = 200;
if (score <=150) {
    console.log(`score is less than or equal to 150`);
} else {
    console.log(`score is greater than 150`);
}

//Short hand notation
//Implicit scope
//Written in single line
if (score === 200) console.log(`score is 200`);


/* 

Not a good practice
if (score === 200) console.log(`score is 200`), console.log(`score is : ${score}`);

if (score === 200) console.log(`score is 200`), 
console.log(`score is : ${score}`);

*/


//If else If else
const balance = 1000;
if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 700) {
    console.log("less than 700");
} 
else if (balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}


//&&

const userLoggedIn = true;
const debitCard = true;
const membership = true;

if (userLoggedIn && debitCard && membership) {
    console.log("You are a premium member");
}
//||

const loggedInWithGoogle = false; 
const loggedInWithEmail = true; 

if (loggedInWithGoogle || loggedInWithEmail) {
    console.log("Signup successfull");
}
// <, >, <=, >=, ==, ===, !==, !< ........

