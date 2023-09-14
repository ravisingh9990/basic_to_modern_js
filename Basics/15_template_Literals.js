//Template Literals
//Create strings using template literals
    //It is a special type of string that makes creating complex strings easier.
    //Template literals allow you to create multi-line strings and to use string interpolation features 
    //to create strings.
        const person = {
            name : "Zozo Horo",
            age : 34
        }

        const greeting = `Hello my name is ${person.name}! 
        I am ${person.age} years old` //Backtics

        console.log(greeting)

        //Output: Hello my name is Zozo Horo! 
        //I am 34 years old

    //Using backtics
    //String is in multiline in both code and in output, This saves inserting \n within strings. 
    //The ${variable} sytax used above is a placeholder
    //Replacing the need to use concatenation with +operator, To add variables to strings, just drop the variable in a 
    //template string and wrap it with ${variable}.
    //Similarly, you can unclude other expressions in your string literal, for example ${a+b}. this gives more flexibility to create robust string.


//Write concise object literal declarations using object property shorthand

    //ES6 adds some nice support for easily defining object literals.
        const getMousePosition = (x, y) => ({x : x, y : y})
    
    //getMousePosition is a simple function that returns an object containing two properties.
    //ES6 provides the syntactics sugar to eliminate the redundancy of having to write x:x
    //You can simply write x once, and it will be converted to x:x (or somthing equivalent) under the hood.
    
    //Here is the same function from above rewritten  to use this new syntax
        const mousePosition = (a,b) => ({a,b})


//Write consice declarative functions with ES6
        //Defining functions within objects in ES5, we have to use the keyword function 
            const user = {
                name : "Tobo",
                sayHello : function(){
                    return `Hello! my name is  ${this.name}.`
                } 
            }
            console.log(user)
        //With ES6, you can rename the "function keyword and colon" altogather when defining functions in objects.
            const user1 = {
                name : "Hobo",
                sayHello(){
                    return `Hello! my name is ${this.name}.`
                }
            }
            console.log(user1)

//Use class syntax to define a constructor function
        //ES6 provides a nes syntax to create objects, using the class keyword.
        //In ES5, an object can be created by defining a constructor function and using the new keyword
        // to instantiate the object.
        //In ES6, a class declaration has a constructor method that is invoked with the new keyword. 
        //If the constructor method is not explicitly defined, then it is implicitly defined with no argumnets.
            //Explicit constructor
            class SpaceShuttle{
                constructor(targetplanet){
                    this.targetplanet = targetplanet
                }
                    takeoff(){
                        console.log("To" + this.targetplanet + "!")
                    
                }
            }

            //Implicit constructor 
            class Rocket {
                launch(){
                    console.log("To the moon!")
                }
            }
            
            const zeus = new SpaceShuttle("jupiter")
                //Output: To Jupiter! 
            const atlas = new Rocket()
                //Output: To the Moon!
            atlas.launch()

//It should be noted that the class keyword declares a new function, to which a constructor is added.
//This constructor is invoked when new is called to create a new object.
//NOTE: Naming convention for ES6 class names UpperCamelCase 
//The constructor method is a special methid for creating and initializing an object created with a class.

 
       