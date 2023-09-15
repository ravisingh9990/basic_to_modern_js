//Create a js promise
    //A promise in js is exactly what it sounds like- you use it to make a promise to do simething, usually asynchronously.
    //When the task completes, you either fulfill your promise or fail to do so.
    //'promise' is a constructor function, so you need to use the new keyword to create one. 
    //It takes a function as it's argument, with two parameters- 'resolve' and 'reject'. 
    //These are mehods used to determine the outcome of the promise. 
    
        const myPromise = new Promise((resolve, reject) => {})


//Complete a promise with resolve and reject

    //A promise has 3 states: Pending, Fulfilled, and Rejected.
    //The above promise is forever stuck in the 'Pending' state because you did not add a way to complete the Promise.
    //The 'resolve' and 'reject' parameters given to the promise argument are used to do this.
    //'resolve' is used when you want your promise to succeed, and 'reject' is used when you want it to fail.

        /*
        const myPromise = new Promise((resolve, reject)=>{
            if(condition here){
                resolve("promise was fulfilled")
            }else{
                reject("Promise was rejected")
            }
        })
        */
    //The example above used strings for the argument of these functions, but it can really be anything. 
    //Often, it might be an object, that you would use data from, to put on your website or elsewhere.


//Handle a Fulfilled promise with then

    /*Promises are most useful when you have a process that takes an unnknown amount of time in your 
    code, (i.e. somthing asynchronous), often a server request. */
    /*When you make a server request it takes some amount of time, and after it completes, you usually want to do somthing
    with the response from the server */
    //This can be achieved by using the 'then' method.
    //The 'then' method is executed immediately after your promise is fulfilled with resolve. 
        myPromise.then(result =>{})

    //'result' comes from the argument given to the 'resolve' method.


//Handle a reject Promise with catch

    //'catch' is the method used when your promise has been rejected. 
    //It is executed immediatly after a promise is 'reject' method is called.
        myPromise.catch(error => {})

    //'error' is the argument passed into the reject method.
