//Med array
// let studentList = ["Harold", "Greta", "Bert", "Hilding", "Diego", "Jesus"];

// let ul = document.createElement("ul");

// studentList.forEach((student) => {
//   let li = document.createElement("li");
//   li.innerText = student;
//   ul.append(li);
// });

// document.body.append(ul);

//Array med objekt

// let studentList = [
//   { name: "Harold", class: "1C" },
//   { name: "Greta", class: "1B" },
//   { name: "Bert", class: "1A" },
//   { name: "Hilding", class: "1B" },
//   { name: "Diego", class: "1C" },
//   { name: "Jesus", class: "1A" },
// ];

// let class1AList = document.querySelector("#A1");
// let class1BList = document.querySelector("#B1");
// let class1CList = document.querySelector("#C1");

// console.log(class1AList);
// studentList.forEach((student) => {
//   let li = document.createElement("li");
//   li.innerText = `Namn: ${student.name} - Klass: ${student.class}`;
//   if (student.class === "1A") {
//     class1AList.append(li);
//   } else if (student.class === "1B") {
//     class1BList.append(li);
//   } else {
//     class1CList.append(li);
//   }
//   let ul = document.querySelector(`[data-group='${student.class}']`);
//   ul.append(li);
// });
// document.body.append(ul);

let firstPara = document.createElement("p");
firstPara.innerText = "Hej från javaScript!";

document.body.append(firstPara);

let h1 = document.querySelector("h1");
h1.innerText = "Rubrik från javascript!";

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  document.body.style.background = "lightgrey";
});

let btnPara = document.querySelector("#paraChange");
let paras = document.querySelectorAll("p");

btnPara.addEventListener("click", () => {
  paras.forEach((para) => {
    para.style.color = "darkred";
  });
});

let numbers = [2, 5, 10, 15, 20, 25, 30, 50, 60, 92];

let numUl = document.createElement("ul");

numbers.forEach((num, index) => {
  let numLi = document.createElement("li");
  numLi.innerText = `${num}`;
  if ((index + 1) % 5 === 0) {
    numLi.style.color = "purple";
  } else if (num % 2 === 0) {
    numLi.style.color = "red";
  } else {
    numLi.style.color = "blue";
  }
  //   console.log(index);
  numUl.append(numLi);
});

document.body.append(numUl);

let profileCard = [
  {
    name: "Johanna",
    age: 16,
    amountOfPets: 3,
    email: "allBout@gmail.co,",
    favoriteAuthor: "Strindberg",
    lovesWinter: true,
  },
  {
    name: "Peter",
    age: 23,
    amountOfPets: 1,
    email: "gMan@gmail.co,",
    favoriteAuthor: "Murakami",
    lovesWinter: false,
  },
  {
    name: "Ture",
    age: 80,
    amountOfPets: 10,
    email: "ture@gmail.co,",
    favoriteAuthor: "DinMuter",
    lovesWinter: true,
  },
];

let personBtn = document.querySelector("#getProfiles");
let cards = document.querySelector("#profile-cards");

let getProfiles = document.querySelector("#getProfiles");

getProfiles.addEventListener("click", () => {
  cards.innerHTML = "";
  profileCard.forEach((person) => {
    let profile = document.createElement("div");
    profile.style.margin = "2rem";
    profile.style.display = "flex";
    profile.style.padding = "2rem";
    profile.style.borderRadius = ".5rem";
    profile.style.boxShadow = "2px 2px black";
    profile.style.maxWidth = "250px";

    profile.innerText = `
    Name: ${person.name}
    Age: ${person.age}
    Pets: ${person.amountOfPets}
    email: ${person.email}
    favorite Author: ${person.favoriteAuthor}
    loves winter?: ${person.lovesWinter}`;
    cards.append(profile);

    if (person.lovesWinter === true) {
      profile.style.background = "lightblue";
    } else {
      profile.style.background = "peachpuff";
    }
  });
});

// profileCard.forEach((person) => {
//   let profile = document.createElement("div");
//   profile.style.margin = "2rem";
//   profile.style.display = "flex";
//   profile.style.padding = "2rem";
//   profile.style.borderRadius = ".5rem";
//   profile.style.boxShadow = "2px 2px black";
//   profile.style.maxWidth = "250px";

//   profile.innerText = `Name: ${person.name}
//   Age: ${person.age}
//   Pets: ${person.amountOfPets}
//   email: ${person.email}
//   favorite Author: ${person.favoriteAuthor}
//   loves winter?: ${person.lovesWinter}`;
//   cards.append(profile);

//   if (person.lovesWinter === true) {
//     profile.style.background = "lightblue";
//   } else {
//     profile.style.background = "peachpuff";
//   }
// });
