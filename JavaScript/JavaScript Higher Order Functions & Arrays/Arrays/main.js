const years = [2012, 2009, 1995, 1954, 2021, 2026, 1975, 1852, 1953, 2000, 1900];

// FILTER
// Filter out all the years after 2000
// const newYears = years.filter(function(year) {
//     if(year >= 2000) {
//         return true;
//     }
// });
// const newYears = years.filter(year => year >= 2000 ? true : '');
// console.log(newYears);

// MAP
// Create a new array of years before 1990
// const earlyYears = years.map(function(year) {
//     if(year <= 1990){
//         return year;
//     }else {
//         return 'N.A.';
//     }
// });
// const earlyYears = years.map(year => year <= 1990 ? year : 'N.A.');
// console.log(earlyYears);

// SORT
// Sort the following years from smallest to largest
const sortedYears = years.sort(function(y1, y2) {
    if(y1 - y2) {
        return 1;
    }else {
        return -1;
    }
});
// const sortedYears = years.sort((y1, y2) => y1 - y2);
console.log(sortedYears);



