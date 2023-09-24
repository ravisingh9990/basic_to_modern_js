//You can Declare arrays by these types

const myarr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Shaktiman", "Naagraj", "Chacha Chaudhary"];
const myarr2 = (1, 2, 3, 4);

console.log(myarr[1]);//1


//Array Methods 

//Enter a value to the end of the array

myarr.push(6);
console.log(myarr);//[ 0, 1, 2, 3, 4, 5, 6 ]



//Removes the last element of the array
myarr.pop();
console.log(myarr);//[ 0, 1, 2, 3, 4, 5 ]



//Enter a value at the start of the array
myarr.unshift(9);//[ 9, 0, 1, 2, 3, 4, 5 ]



//Removes the first element of the array
myarr.shift();
console.log(myarr);//[ 0, 1, 2, 3, 4, 5 ]


//Question based array methods

console.log(myarr.includes(9));//-1

console.log(myarr.indexOf(2));//2



const newArr = myarr.join()

console.log(myarr);//[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr);//0,1,2,3,4,5
console.log(typeof newArr);//string



//Slice and Splice
//Printing the original array
console.log("A ", myarr );//[ 0, 1, 2, 3, 4, 5 ]

//Printing the sliced array
const arrA = myarr.slice(1, 3)
console.log(arrA);//[ 1, 2 ]

//Printing the original array
console.log("B", myarr);//[ 0, 1, 2, 3, 4, 5 ]

//Printing the spliced array
const arrB = myarr.splice(1, 3)
console.log(arrB);//[ 1, 2, 3 ]

//Printing the original array
console.log("C", myarr);//[ 0, 4, 5 ]


