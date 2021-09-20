// We can set default values for this function, both here are equal to 1 as default 
// function addNums (num1 = 1, num2 = 1 ) {
//     return(num1 + num2);
// }

// console.log(addNums(7,3));

/* Turning the above into a arrow function
    1. replace the function keyword with const (make it into a variable)
    2. add the arrow after the parameters section 
    3. The function below will only hold true if we are returning one expression

*/
const addNums = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums(3,4));