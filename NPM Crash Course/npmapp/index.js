const _ = require('lodash');

const numbers = [23, 45, 90, 132, 342, 4532];

_.each(numbers, function(number, i) {
    console.log(number);
});