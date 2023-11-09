// Genomgång
// let furitAndBerries = [
//     'banan',
//     'ananas',
//     'nypon',
//     'smultron',
//     'blåbär',
//     'mango',
//     'jordgubbar'
// ];

// logga ut alla values med for
// for(let i = 0; i < furitAndBerries.length; i++){
//     console.log(furitAndBerries[i]);
// };

// console.log(typeof furitAndBerries);

// forEach
// Logga ut alla values med foreach, denna funktion returnerar inget men man kan forca det...
// blir samma sak som .map() funktion

// let newerFruits = [];
// furitAndBerries.forEach((i) => {
//     console.log(i)
    // newFruits.push(i);
// });

// Map - skapa ny array baserad på den första. -> generellt sätt! inte alltid
// let newFruits = furitAndBerries.map((i) => {
//     return i + ' milkshake';
// });

// console.log(newFruits);


// Filter - returnerar en ny filtrerad array!

// let allergieFruits = furitAndBerries.filter((fruit) => {
//     return fruit !== 'blåbär';
// });

// console.log(allergieFruits);


// UPPGIFTER!

// 1.
// console.log each item in this array WITHOUT using a for loop
// let myArr = [ 1, 2, 'One', true];

// myArr.forEach((i) => {
//     console.log(i);
// });


// 2.
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
// Loop over the 2 arrays and if there are any common courses, if so console.log them

student1Courses.forEach((course) => {
    if(student2Courses.includes(course)){
        console.log(course);
    }
});



// 3.
let food1 = ['Noodle', 'Pasta', 'Ice-cream'];
let food2 = ['Fries', 'Ice-cream', 'Pizza'];
// compare the 2 arrays and find common food if any

food1.forEach((course) => {
    if(food2.includes(course)){
        console.log(course);
    }
});


// 4.
let values1= ['Apple', 1, false];
let values2 = ['Fries', 2 ,true];
let values3 = ['Fries', 9, 'Apple'];
// compare the 3 arrays and find any common elements

let filterd = values1.filter((values) => {

});
console.log(filterd);



// 5.
let furniture = ['Table', 'Chairs','Couch'];
// For each item in this array console.log the letters in each item

furniture.forEach((word) => {
        console.log(word.split(''));
});

