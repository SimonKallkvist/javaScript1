// Function
// ex 1
// let x = 10;
// function myFunction() {
//     // Ett nytt Scope
//     //Kan ändra på en global variabel
//     x = 5;
//     console.log('Nu körs funktionen');
// }

// myFunction();

//ex2
// function doubleUp(){
//     let x = 10;
//     let y = x.toString();
//     return x;
// }
//  let newNumber = doubleUp();
// console.log(newNumber);

// Expression, strict comparison same type and value for true
// console.log(doubleUp() === '10');

//ex 3
// function numberTimesTwo(parameter){
//     return parameter*2;
// }

// let doubleOf30 = numberTimesTwo(30);
// console.log(doubleOf30);
// console.log(numberTimesTwo(100));

// // ex 4

// function addTwoNumbers(x, y) {
//     let result = x + y;
//     return result;
// }

// console.log(addTwoNumbers(10, 45));


// If / else

// let aName = 'Brandon';

// if(aName === 'Brandon'){
//     console.log('You are a teacher ' + aName)
// }else {
//     console.log('You are a student ' + aName)
// }


// Comparisons less or greater than
// let myNumber = 10;

// if(myNumber > 10){
//     console.log(myNumber + ' is larger than 10')
// }else {
//     console.log(myNumber + ' is less or equal to 10')
// }

// function isLongWord(word){
//     if(word.length >= 5){
//         return 'this is a long word'
//     }else{
//         return 'is a short word'
//     }
// }

// console.log(isLongWord('Yes'));



// UPPGIFTER //


// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function incrementNumber(x){
    x++;
    return x;
}
console.log(incrementNumber(6));

// Write a function that converts hours into seconds.
function hourIntoSec(hour) {
    let seconds = hour * 60 * 60;
    return seconds;
}

console.log(hourIntoSec(1));

// Create a function that takes the users age in years and returns the age in days.
function yearsToDays(years) {
    let days = years * 365;
    return days;
}

console.log(yearsToDays(4));

// Write a function that takes the base and height of a triangle and return its area. The area of a triangle is: (base * height) / 2
function triArea(x, y){
    let area = (x * y)/2;
    return area;
}
let area = triArea(3, 4);
console.log(area);

// Write a function that converts days into minutes.
let days = (x) => x * 24 * 60;
console.log(days(1));

// Create a function that takes an array containing only numbers and returns the first element.
let myArray = [1, 2, 3, 4, 5];

function firstNumber(myArray){
    let first = myArray[0];
    return first;
}
console.log(firstNumber(myArray));

// You are counting points for a basketball game. Write a function that takes in 2 parameters - The amount of 2-pointers the team has scored, and the amount of 3-pointers. Return the total amount of points they’ve scored. (For example, finalscore(5,3) should return 19.)
function finalScore(x, y){
    let final = (x*2) + (y*3);
    return final;
}

console.log('The final score is: ' + finalScore(5,3));

// You’re helping a farmer count the total amount of legs among all his animals. He owns chickens (2 legs), cows(4 legs) and pigs (4 legs). Write a function that, given the amount of each animal, returns the total number of legs.
function helpFarmer(x, y, z){
    let legs = (x*2)+(y*4)+(z*4);
    return legs;
}

console.log(helpFarmer(10, 10, 10));

let animalLegs = (x, y ,z) => {
    let legs = (x * 2) + (y * 4) + (z * 4);
    return legs;
};
console.log(animalLegs(10,10,10));


// Create a function that takes in a number, and returns true if the number is divisible by 2 (no decimals allowed). Otherwise, return false.
let divided = (x) => {
    if(x % 2 === 0){
        return true;
    } else {
        return false;
    }
};

console.log(divided(64));

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
let num = (x) => {
    if(x <= 0){
        return true;
    } else {
        return false;
    }
};
console.log(num(1));

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
let sum = (x, y) => {
    // let final = x + y;
    // if(final < 100){
    //     return true;
    // }else {
    //     return false;
    // }

    if(x + y <= 100){
        return true;
    } else {
        return false;
    }
};

console.log(sum(101,1));