const accountId = 5525; //Can't be reassigned
let accountEmail = "ravi@mail.com"; //Scope bounded,  
var accountPassword = "1234"; //No't bounded by scope
accountCity = "Delhi"; //It's poosible to declare variables withouth using let, const or var

//accountId = 2 
accountEmail = "rr@google.com";
accountPassword = "ravi";
accountCity = "Lucknow";
accountState;

//console.log(accountId); 

console.table([accountEmail, accountPassword, accountCity]); //prints all the variables in a table

