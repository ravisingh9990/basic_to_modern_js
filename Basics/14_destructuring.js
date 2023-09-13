//Destruturing 
//Use destructuring assignment to extract values from objects


    //Destructuring assignment is special syntax for neatly assigning values taken directly from an object.
    //ES5 EXAMPLE:
        const user = {name : "Ravi Chauhan", age : 28}
        //const name = user.name
        //const age = user.age

    //ES6 EXAMPLE:
        const {name, age} = user 
    //you can extract as many or few variables as you want



//Use Destructuring Assignment to assign variables from objects


        const user1 = {name: "rohit", age: 24}
    //Here's how you can give new variable names in the assignment
        const { name: userName, age: userAge} = user1
    //You may read it as "get the value of user.name and assign it to a new variable, named userName" and so on.
        console.log(userName)//Output: rohit


//Use destructuring assignment to assign variables from nested objects
        const user2 = {rohan:{age:25, email: "rohan@mail.com"}}

    //Here's how to extract the values of object properties and assign them to variables with the same name: 
        const {rohan:{Age,email}} = user2

    //Here's how you can assign an object properties 'values' to variables with different names
        const {rohan:{age: userage, email: userEmail}} = user2

//Use Destructuring assignment to assign variables from arrays
    //Key difference between the spread operator and array destructuring: 

    //The spread operator unpacks all contents of an array into a comma-separated list.
    //consequently, you cannot pick or choose which elements you want to assign to variables.

    //Destructuring an array lets us do exactly that: 
        const [a,b] = [1,2,3,4,5,6]
        console.log(a,b)//Output: 1 2
    //We can also access the value at any index in an array with destructring by using 'commas' to reach the desired index:
        const [c,d, , ,e] = [11, 22, 33, 44, 55, 66]
        console.log(c,d,e)//11 22 55


//Destructuring via rest elements
    //In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
    //The result is similar to Array.prototype.slice(), as follows
        const [g,h, ...arr] = [1, 2, 3, 4, 5, 6]
        console.log(g,h)//Output: 1 2
        console.log(arr)//Output: [ 3, 4, 5, 6 ]
    //Variables g and h take the first and second values from the array. 
    //After that, because of the rest syntax presence, 'arr' gets the rest of the values in the form of an array.

    /*NOTE: The rest element only works correctly as the last variable in the list. As in, you cannot use the rest 
    syntax to catch a subarray that leaves out the last element of the original array. */

//Use destructuring assignment to pass an object as a function's parameters

    //In some cases you can destructure the object in a function argument itself.
        const profileUpdate = (profileData) => {
            const {name, age, nationality, location} = profileData
        }
    //This effectively destructures the object sent into the function 

    //This can also be done in place: 
        const profileupdate = ({name, age, nationality, location}) => {}
    //When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.
