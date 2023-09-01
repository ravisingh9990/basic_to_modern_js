//JAVASCRIPT NOTES WITH PRACTICE

//Comments
    //Single Line Comment

    /*
    This is 
    Multiline 
    Comment in 
    Javascript
    */

//Datatypes 
    

    //1. string
        let somewords = "This is some text"
   
        
    //2. number
        let marks = 90
    
    //3. boolean
        isPostPublished = true

    //4. bigInt
        let bignumber = BigInt(1457957569887599869896)

    //5. object
        const user = {
            name: "Ravi",
            contact: 9958077294,
            email: "ravisingh9990@gmail.com"
        }
        //console.log(user)

    //6. null
        let power = null 
        //null is an empty value, it's not 0, because 0 is a value.

    //7. resource
        //it's not a real datatype

    //8. undefined
        let myCar 
        //at the time of declaration, javascript variables have the initial value of undefined

 
//Variable Declaration 
    var myPet
    let myFavPet

//Assigning Value to Variables
    myPet= "Dog"
    myFavPet= "Lion"

//Uninitialized Variables
    /*
    1. Performing mathematical operations of undefined variables results in NaN (Not a Number)
    2. Contatenating a string with undefined variables results in a string of undefined
    */