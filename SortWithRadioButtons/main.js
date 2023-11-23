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
  if (isTeacher) {
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

// --------------> FilterMetod för samma typ...
// let showStudentsBtn = document.querySelector(".btn");
// let resultsUl = document.querySelector(".resultList");

// showStudentsBtn.addEventListener("click", () => {
//   resultsUl.innerHTML = "";
//   let education = document.querySelector("[name='program']:checked").value;
//   let city = document.querySelector("[name='city']:checked").value;
//   let isTeacher = document.querySelector("#amTeacher").checked;
//   let year = document.querySelector("#year").value;
//   console.log(year);
//   //Filtrering

//   myArray.filter((elev) => elev.education === "Frontend");

//   let filteredStudents = students.filter((student) => {
//     return (
//       (education === "all" || student.utbildning === education) &&
//       (city === "all" || student.stad === city) &&
//       (year === "Alla" || +year === student.år)
//     );
//   });
//   //Rendering
//   if (isTeacher) {
//     filteredStudents.forEach((student) => {
//       let li = document.createElement("li");
//       li.textContent = `Namn: ${student.namn} Utbildning:${student.utbildning} Stad: ${student.stad} År: ${student.år}`;
//       resultsUl.append(li);
//     });
//   } else {
//     alert("Please confirm that you are a teacher!");
//   }
// });
