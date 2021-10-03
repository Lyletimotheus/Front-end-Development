const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Auto", start: 1981, end: 2008},
    {name: "Company Three", category: "Retail", start: 1995, end: 2016},
    {name: "Company Four", category: "Technology", start: 1989, end: 2021},
    {name: "Company Five", category: "Finance", start: 1941, end: 1978},
    {name: "Company Six", category: "Finance", start: 1951, end: 2005},
    {name: "Company Seven", category: "Retail", start: 1991, end: 2001},
    {name: "Company Eight", category: "Technology", start: 1971, end: 2000},
    {name: "Company Nine", category: "Auto", start: 1983, end: 2019},
];

const ages = [33, 12, 34, 56, 98, 35, 21, 10, 43, 60, 99, 33, 21, 23, 68, 82, 93, 12, 13, 19];

// ********** FOR LOOP ******************
for(i = 0; i < companies.length; i++) {
    // console.log(companies[i]);
}

for(i = 0; i < ages.length; i++) {
    // console.log(ages[i]);
}

// ************ FOREACH *****************
// we can get the iterator, index or entire array 
// companies.forEach(function(company, index, companies){
   companies.forEach(function(company){
    console.log(company)
});

// FILTER

// MAP

// SORT

// REDUCE