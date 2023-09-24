const marvel_heros = ["Ironman", "Thor", "Spiderman"];
const dc_heros = ["Superman", "Batman", "Flash"];


//.push method changes into origianl array
marvel_heros.push(dc_heros);


// console.log(marvel_heros);//["Ironman", "Thor", "Spiderman", ["Superman", "Batman", "Flash"]]
// console.log(marvel_heros[3][1]);//Batman


//.concat method doesn't change the origilan array, it retruns a new array.
const all_heros = marvel_heros.concat(dc_heros);
//In concat there is a limitation of passing only one argument, for that we can use spread operator.
//We can use as many arguments as we want by just using ...variable name in the sqaure brackets.


// console.log(marvel_heros);//["Ironman", "Thor", "Spiderman"] //Origianl array if you comment the above code
// console.log(all_heros);//["Ironman", "Thor", "Spiderman", "Superman", "Batman", "Flash"]


//Joining the array using spread operator
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);//["Ironman", "Thor", "Spiderman", "Superman", "Batman", "Flash"]


//Handling multi-dimensional arrays

const another_array = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]]

const real_another_array = another_array.flat(Infinity);//In place of infinity you can provide the depth or 
//how many levels deep is your multi-dimensional array is. If you don't know the exact depth, you can use infinity.

console.log(real_another_array);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


//When we extract data from somewhere it may be in a different format than an array. 
//To check that the data is in array format 


console.log(Array.isArray("Ravi Chauhan"));//false //because it's a string
console.log(Array.from("Ravi Chauhan"));//[ "R", "a", "v", "i", " ", "C", "h", "a", "u", "h", … ]


console.log(Array.from({name: "Ravi Chauhan"}));// []   //Whenever it can't convert it into array it will return an empty array
//It can't converted the above object into array because we haven't specified the values to create the array from (properties or values).


const score1 = 100; 
const score2 = 200; 
const score3 = 300; 

console.log(Array.of(score1, score2, score3)); //This method returns a new array from a set of elements(variables, or objects or anything else)
