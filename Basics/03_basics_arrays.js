//Store multiple values in one variable using Arrays
        const shoppingList = ["Toothpaste", "Hair oil", "Sugar"]

//Multi-Dimentional Arrays
        const purchaseList = [
            ["sugar", 5, ["shoes", "T-shirt"]],
            ["Water Bottel", 6],
            ["Chocolate", 5]
        ]

//Access Array Data With Indexes
        console.log(shoppingList[0]) //Output: Toothpaste

//Accessing the value of an array by storing in a variable
        const arrayValue = shoppingList[1]
        console.log(arrayValue) //Output: Hair Oil

//Modify Array Data With Indexes
    //Unlike strings, Arrays are mutable and can be changes freely, even if declared with const
        shoppingList[0] = "Shoes"
        console.log(shoppingList) //output: [ 'Shoes', 'Hair oil', 'Sugar' ]

//Accessing Multi-Dimentional Arrays With Index
        const getTheValue = purchaseList[0][2][0]
        console.log(getTheValue) //Output: Shoes

//Manipulate Arrays with PUSH METHOD
        //Appending Data to the end of an Array
                const devices = ["iphone", "macbook", "thinkpad"]
                devices.push("pixel", "keyboard")
                console.log(devices) //Output: [ 'iphone', 'macbook', 'thinkpad', 'pixel', 'keyboard' ]

                devices.push(["samsung galaxy", "sony erricsion"])
                console.log(devices)
                /* Output: 
                [
                'iphone',
                'macbook',
                'thinkpad',
                'pixel',
                'keyboard',
                [ 'samsung galaxy', 'sony erricsion' ]
                ]
                */

//Manipulate Arrays With POP METHOD
        //Removes the last element from an array and returns that element 
        // It could be any type of vlaue like number, string, nested arrays or anything
                const olddevices = devices.pop()
                console.log(olddevices) //Output: [ 'samsung galaxy', 'sony erricsion' ]
                
//Manipulate Arrays With SHIFT METHOD
        //Removes the first element of an array
                const firstValue = devices.shift()
                console.log(firstValue) //Output: iphone
        
//Manipulate Array With UNSHIFT METHOD
        //Adds one element at the beginning of the array
        const newFirstValue = devices.unshift("Nokia")
        console.log(devices) //Output: [ 'Nokia', 'macbook', 'thinkpad', 'pixel', 'keyboard' ]