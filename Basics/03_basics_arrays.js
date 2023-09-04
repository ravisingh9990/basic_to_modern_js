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