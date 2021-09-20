const x = 6;
const y = 11;

// if (x == 10 ) {
//     console.log('x is 10')
// }  else if (x > 10) {
//     console.log('x is greater than 10')
// } else {
//     console.log('x is not 10');
// }

// One of the cases need to match to be true
if(x > 5 || y > 10) {
    // console.log('x is more than 5 or y is more than 10');
}

// With and both cases need to be true 
if(x > 5 && y > 10) {
    // console.log('x is more than 5 or y is more than 10');
}

// Ternary Operator 
const z = 9;

// If constant x is greater than 10 let us set the color variable to red and if it is not true set the color variable to blue
const color = z > 10 ? 'red' : 'blue';
// console.log(color);

// Switches - work with if statements
switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue': 
        console.log('color is blue')
        break;
    default:
        console.log('Color is not red or blue');
}

// Example number 2

const count = 1;
const cart = count >= 1 ? 'full' : 'empty';

switch(cart) {  
    case 'full':
        console.log('you have a item in your cart');
        break;
    case 'empty' :
        console.log('your shopping cart is empty');
        break;
    default:
        console.log('please login');
}

