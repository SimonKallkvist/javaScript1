// --------------------->

let students = [
  {
    namn: "Bat von Man",
    utbildning: "Frontend",
    stad: "Stockholm",
    år: 1,
  },
  {
    namn: "Bengt Syrsa",
    utbildning: "Backend",
    stad: "Stockholm",
    år: 2,
  },
  {
    namn: "Ant Bro",
    utbildning: "UX",
    stad: "Malmö",
    år: 2,
  },
  {
    namn: "Lion Miss",
    utbildning: "Frontend",
    stad: "Stockholm",
    år: 1,
  },
  {
    namn: "Dragon Sher",
    utbildning: "UX",
    stad: "Borås",
    år: 1,
  },
];

console.log(students[0].utbildning);

let filterBtn = document.querySelector(".btn");
let resultList = document.querySelector(".resultList");
let isTeacher = document.querySelector("#amTeacher");

filterBtn.addEventListener("click", () => {
  resultList.innerHTML = "";
  if (isTeacher.checked) {
    let selectedRadio = document.querySelector('[name="program"]:checked');
    let selectedCity = document.querySelector('[name="city"]:checked');

    students.forEach((person) => {
      if (
        selectedRadio.value.toUpperCase() === person.utbildning.toUpperCase() &&
        selectedCity.value.toUpperCase() === person.stad.toUpperCase()
      ) {
        let newLi = document.createElement("li");
        newLi.append(
          `${person.namn} takes the ${person.utbildning} course and lives in ${person.stad}`
        );
        resultList.appendChild(newLi);
      } else if (selectedRadio.value.toUpperCase() === "ALL") {
        let newLi = document.createElement("li");
        newLi.append(
          `${person.namn} takes the ${person.utbildning} course and lives in ${person.stad}`
        );
        resultList.appendChild(newLi);
      }
    });
    // if(students.utbildning.toUpperCase() === ){

    // }
  } else {
    alert("You has to be teacher to seeeee!");
  }
});

// -------> Fungerar tror jag men inte så snyggt.
