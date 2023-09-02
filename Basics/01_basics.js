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
        // console.log(user)
        

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

//Difference between var and let keywords
    /*
    1. Variables declared with var keyword, can be  easily override
    2. With var you can declare the variable again with the same name
    3. A variable with the same name can't be defined with let 
    */

//Declaring a Read Only Variable (Const Keyword)
    /*
    1. Variables declared with const, are Read Only
    2. Variables assigned with const, can't be reassigned
    */
    
    const FAV_DOG = "Cyberian Husky"
    // FAV_DOG = "German Shephered"
    // console.log(FAV_DOG) //TypeError: Assignment to constant variable.

    //NOTE: It is common practice to use UPPERCASE variable identifiers for immutable values, and 
    //lowercase or camelcase for mutable values (objects and arrays)

//Escape Sequences in string using backslash(\)
        //NOTE: The bakslash(\) should not be confused with the forward slash (/). They do not do the same
        //Escape sequences allow you to use characters you may not otherwise be able to use in a string
        /*
        \'  single quote
        \"  double quote
        \\  backslash   (backslash itself must be escaped in order to display as a backslash)
        \n  new line
        \t  tab
        \   carriage return
        \b  word boundary
        \f  form feed
        */
//Appending variables to strings using (+=) operator
        const anAdjective = "Awesome!"
        let ourstr = "My code is "
        //console.log(ourstr+=anAdjective)