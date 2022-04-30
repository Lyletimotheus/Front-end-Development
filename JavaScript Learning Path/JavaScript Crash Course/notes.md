=========================
Course Outline
=========================

1. Variables and data types
---------------------------------------------------------------------------------------------------------------------------------------------------------------
|   Variables               |   Definition                      |   Example                                        |            Output Type
|--------------------------------------------------------------------------------------------------------------------------------------------------------------
    const                       If we know we are not going to      const age = 31;
                                reassign a variable with a 
                                different value.

    let                         Assigning values to variables       let gameScore = 1; 
                                that we can reassign.               let gameScore = 2;


------------------------------------------------------------------------------------------------------------------------
|   Data Types               |   Definition                      |      Example                                        |
|-----------------------------------------------------------------------------------------------------------------------
    1. String                    Any text should be enclosed with       const name = 'Lyle';
                                single or double quotations.        
    
    2. Integer                  Any number or decimal will have a       const age = 32;
                                data type of integer.

    3. Boolean                  True or false value                     const isCool = true;

    4. Null                     Assigning the value of NULL to          const x = NULL;     
                                a variable.

    5. Undefined                When a variable is not declared.        let z;

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
|   String Properties               |   Definition                      |      Example                                        |     Output Type
|------------------------------------------------------------------------------------------------------------------------------------------------------------------
    1. length                           Returns the length of a string.         console.log(name.length);                           number

    2. toUpperCase()                    Returns the string in uppercase.        console.log(name.toUpperCase());                    string

    3. toLowerCase()                    Returns the string in lowercase         console.log(name.toLowerCase());                    string

    4. substring()                      Returning part of a string value.       console.log(name.substring(0,4));                   string

    5. split()                          Split the string into parts,            console.log(sentence.split('));                     array
                                        either using a specific delimiter
                                        or leaving it empty ('')
                                        
                                        We use it normally to split text 
                                        that can be stored into an array.

2. Arrays
----------------------------------------------------------------------------------------------------------------------------------------------------------------
|   Array Methods               |   Definition                      |      Example                                              |   Output Type
|---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                            const fruits = ["apples", "oranges", "tomatoes"];

    1. push()                       Adding the array item onto the          fruits.push('grapes');                                  array
                                    end of the array.   

    2. unshift()                    Adding the array item onto the          fruits.unshift('strawberries');                         array
                                    beginning of the array.

    3. pop()                        Removes the last item of the array      fruits.pop();                                           array

    4. Array.isArray()              Checks to see if the data type is       console.log(Array.isArray(fruits))                      boolean
                                    an array.               

    5. indexOf()                    Returns the index of a particular item  console.log(fruits.indexOf('apples'));                  number
                                    inside the array.                                       

3. Object Literals 
---------------------------------------------------------------------------------------------------------------------------------
|   Object Literals               |   Definition                      |                         Example                          |
|--------------------------------------------------------------------------------------------------------------------------------
                                       We can have various data types
                                        in a object literal.                                     const person = {
                                                                                                    firstName: 'John',
                                                                                                    lastName: 'Doe',
                                                                                                    age: 32,
                                                                                                    hobbies: ["music", "movies", "sport"],
                                                                                                    address: {
                                                                                                        street: '50 main street',
                                                                                                        city: 'Boston',
                                                                                                        state: 'WC'
                                                                                                    }
                                                                                                };

    Destructuring                       When we assign values to the                            const {firstName, lastName, address: {city}} = person;
                                        properties of the object.

    
    Adding onto the person object       When we want to add items onto                          person.email = 'john@gmail.com';
                                        the object.

    JSON.stringify                      Converts an object literal into                         const personJSON = JSON.stringify(person);
                                        JSON data format.

4. Methods for strings, arrays, objects, etc
5. Loops - for, while, for...of, forEach, map
---------------------------------------------------------------------------------------------------------------------------------
|   Loops               |   Definition                      |                         Example                                   |
|--------------------------------------------------------------------------------------------------------------------------------
    1. for             
    
    2. while
    
    3. for of 

    4. forEach             Higher order function.                      todos.forEach(function(todo) {
                                                                            console.log(todo.text);
                                                                        });

    5. map                  Returns a new array                         const todoText = todos.map(function(todo) {
                                                                            return todo.text;
                                                                        });

    6. filter               Determines if a array item                  const todoCompleted = todos.filter(function(todo) {
                            meets a specified criteria.                     return todo.isCompleted = true;
                                                                        });     
                           




6. Conditionals (if, ternary & switch)
7. Functions (normal and arrow)
8. OOP (prototypes & classes)
9. DOM Selection
10. DOM Manipulation
11. Events
12. Basic Form Validation