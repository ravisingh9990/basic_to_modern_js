// const appUser = new Object(); //Singleton //Using constructor method

const appUser = {} 
// From these 2 ways to declare an object

        appUser.id = "123ab";
        appUser.name = "Ravi";
        appUser.issLoggedIn = false;

        console.log(appUser);

        const regularUser = {
            email : "some@email.com",
            fullName : {
                userFullName : {
                    firstName : "Ravi",
                    lastName : "Chauhan"
                }
            }
        }

        console.log(regularUser.fullName.userFullName.firstName);//Ravi


        // console.log(regularUser.fullName?.userFullName.firstName);//You can use ? to check if the vlaue or property is availabe or not.



//Combining or merging the objects

        const obj1 = {1: "a", 2: "b"}
        const obj2 = {3: "c", 4: "d"}

//This will not merg the objects, only put both obj1 and obj2 into an object 
        const obj3 = {obj1, obj2}

        console.log(obj3);//{ obj1: {…}, obj2: {…} }


//const obj4 = Object.assign(obj1, obj2)
//This will take the values of obj2 and will put them into obj1,
//because the 1st argument in assign method is the target and 2nd is the source. 

//If you want ot put all the values from obj1 and obj2 into a new object then specify an empty object in place of 1st argument.
//as below

        const obj4 = Object.assign({}, obj1, obj2);//1st argument is target and other arguments are source.

// console.log(obj4);//{ 1: "a", 2: "b", 3: "c", 4: "d" }


//Merging the objects using Spread operator
//Mostly used and more easy

        const spreadObj = {...obj1, ...obj2};

        console.log(spreadObj);//{ 1: "a", 2: "b", 3: "c", 4: "d" }


        const user = [
            { id : "1", email : "a@mail.com"},
            { id : "2", email : "b@mail.com"},
            { id : "3", email : "c@mail.com"}
        ]

        const data = user[1].email;//Here 1st we are accessing an array using [], then the object using . notation

        console.log(data);



//Converting an object into an array, so we can perform various operation on it, like looping through.

//Returns the original object
        console.log(appUser);//{ id: "123ab", name: "Ravi", issLoggedIn: false }

//Returns the array of keys(properties)
        console.log(Object.keys(appUser));//[ "id", "name", "issLoggedIn" ]

//Returns the array of values
        console.log(Object.values(appUser));//[ "123ab", "Ravi", false ]

//Returns the array of arrays with key value pairs.
        console.log(Object.entries(appUser));//[ [ "id", "123ab" ], [ "name", "Ravi" ], [ "issLoggedIn", false ]]

//Check if the object has the certain property or not, retruns true or false
        console.log(appUser.hasOwnProperty("issLoggedIn"));//true
