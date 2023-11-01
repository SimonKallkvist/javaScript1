// 1 
console.log('Simon' + ' 30 ' + ' Frankrike ' + ' 1 syskon' + ' en liten hund');


// 2
let myArray = ['Banan', 'Äpple', 'Apelsin', 'Mango', 'Papaya'];
console.log(myArray[0]);
console.log(myArray[3]);
// Adds new value for the array at the end
myArray.push('Ananas');
console.log(myArray);

// 3
let myBooks = ['Book1','Book2','Book3','Book4','Book5','Book6'];
console.log(myBooks[myBooks.length - 1]);
console.log(myBooks[myBooks.length - 2]);
// Removes the last index of the array
myBooks.pop();
console.log(myBooks);

// 4
let myPet = {
    race: 'Mixed breed',
    age: '13',
    vegetarian: false,
    bestFriend: {
        type: 'dog',
        race: 'Pointer',
        name: 'Bella',
        age: '7',
        vegetarian: false
    },
    sound() {
        console.log('woofwoof');
    }
}

console.log(myPet.age);
console.log(myPet.bestFriend.name);
myPet.sound();

// 5
let name = 'Simon';
let age = '30';
let favSport = 'Skateboarding';

console.log(`My name is ${name} and I'am ${age} years old. My favorite sport is ${favSport}`);