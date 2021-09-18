// -----------------------------------
//               ARRAYS 
// -----------------------------------
/* 
1. Using a constructor to create an array
const numbers = new Array(1,2,3,4,5);

2. Using [] to create an array - preferred method by most developers

3. Adding items to the array array_name[] = 'item_to_add';

4. Adding items to the end of the array, using array_name.push

5. Adding items to the beginning of an array, using array_name.unshift

6. Removing items at the end of an array, using array_name.pop

7. Check to see if the data type is an array, use Array.isArray()
*/

const fruits = ['apples', 'oranges', 'banannas', 12];
fruits[4] = 'grapes';
fruits.push('mangoes');
fruits.unshift('blackberries');
fruits.pop();

console.log(fruits.indexOf('oranges'));

