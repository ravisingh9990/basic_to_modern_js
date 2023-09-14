//Use getter and setters to control access to an object
    //You can obtain values from an object and set the value of a property within an object. 
    //These are classically called getters and setters.
    //getter functions are meant to simply retrun (get) the value of an object's private variable to the user without
    //the user directly accessing the private variable .
    //setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function.
    //This change could involve calculations or even overwriting the previous value completely.
        class Book {
            constructor(author){
                this._author = author
            }
            //getter
            get writer(){
                return this._author
            }
            //setter
            set writer(updatedAuthor){
                this._author = updatedAuthor
            }
        }

        const novel = new Book('anonymous')
        console.log(novel.writer)//Output: anonymous
        novel.writer = 'new Author'
        console.log(novel.writer)//Output: new Author
    //Notice the syntax used to invoke the getter and setter.
    //Getter and setter are important because they hide internal implementation details.
    /*
    Note: It is convention to precede the name of a private variable with an underscore(_). 
    However, the practice itself does not make a variable private.
    */





        
    