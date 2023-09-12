//Mutate an Array Declared with const

    //Objects (including arrays and functions) assigned to a variable using const are stil mutable. 
    //Using the const declaration only prevents reassignment of the variable identifier.
        const s = [5,6,7]
        s = [1,2,3]//Output:Error(constvariablescan'tbereassigned)
        s[2] = 45//Output:5,6,45
        //console.log(s)

//Prevent Object mutation
    //object.freeze function is used to prevent data mutation
    //Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.
        let obj = {
            name : "Ravi Chauhan",
            review : "is a Warrior"
        }
        object.freeze(obj)
        obj.name = "Rohan"
        obj.newprop = "test"
        //console.log(obj)//Error (Because out editors runs in strict mode by default)
        //console will display the value {name : "Ravi Chauhan", review: "is a warrior"}