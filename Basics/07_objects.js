 //BUILD OBJECTS:
    //Objects: Similar to arrays, except that instead of using indexes to access and modify their data,
    //you access the data in objects through what are called properties.
    //used to access the data in a structured way, and can represent real world objects, like a cat.
        const cat = {
            "name" : "lucy",
            //name : "lucy" //property name without spaces doesn't require qutoes
            //"cat name" : "lucy" //property names with spaces in them must be in quotes
            "legs" : 4,
            "tails" : 1, 
            "enemies" : ["water", "dogs"],
            36 : "teeth" //property names could also be numbers 
        }
    //=> If you your object has any non-string properties, javascript will automatically typecast them as strings

//Access objects:
    //dot notation and bracket notation
    //use dot notation when you know the name of the property you are trying to access ahead of time
        const car = {
            "model" : "vxi",
            "tyre" : "4",
            "color" : "black"
        }
        const carData = car.color
        const carDataNew = car.model
        const carDataWithBracket = car["tyre"]

        console.log(carData)
        console.log(carDataNew)
        console.log(carDataWithBracket)


//Accessing object properties with variables using bracket notation
    //Another use of bracket notation on objects is to access a property, which is stored as the, value of a variable
    //This can be very useful for iterating through an object's property or when accessing a lookup table.
        const dogs = {
            fido : "muft",
            hunter : "doberman",
            snoopie : "beagle"
        }
        const mydog = "hunter"
        const mybreed = dogs[mydog]
        console.log(mybreed) //Output: doberman
    //=> we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name

//Updating Object Properties
    //objects can be updated just like variables, but using dot or bracket notation

        const ourdog = {
            name : "camper",
            legs : 4,
            tails : 1,
            friends : ["men", "monkey"]
        }
        ourdog.name = "happy camper"
        //ourdog[name] = "happy camper" 

//Adding New property to object
        ourdog.sound = "bow-wow" //or
        //ourdog[sound] = "bow-wow"

//Deleting property 
        delete ourdog.tails
        //delete ourdog[tails]

//Using objects for lookups
    //Objects can be thought of as a key/value storage, like a dictionary 
    //If you have a tabular data, you can use an object to lookup values rather than a switch or if else chain
    //This is most useful when yu know that your input data is limited to a certain range
        const article = {
            title : "how to create objects",
            link : "www.google.com",
            author : "ravi singh",
            language : "javascript",
            tags : "tech"
        }
        const articleAuthor = article.author
        const articleLink = article.link
        const value = "title"
        const valueLookup = article.language
        console.log(valueLookup)

//Check if the property exist
        const propCheck = article.hasOwnProperty("tags")
        console.log(propCheck)//Output: true

//Manipulating complex objects
    //sometimes you may want to store data in a flexible data structure
    //object is one way to handle flexible data.
    //they allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects

//Accessing Nested objects
    //The sub-properties of objects can be accessed by chaninging togather the dot aor bracket notation

//Accessing Nested Arrays
    //objects can contain both, nested objects and nested arrays
    //similar to accessing nested objects, array bracket notation can be chained to access nested arrays.
     const ourpets = [
        { animalType : "cat", names : ["billi", "kali billi", "safed billi"]},
        {animalType : "dog", names : ["sheru", "moti", "kalua"]}
     ]
     const val1 = ourpets[0].names[1]
     const val2 = ourpets[1].names[0]
