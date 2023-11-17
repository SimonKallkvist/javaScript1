// 1.a) Skriv ut namnen på samtliga städer som <li>-taggar i existerande <ul> (se HTML-fil) med hjälp utav Javascript.
// 1.b) Färga namnen alla franska städer blått och alla brittiska städer rött i denna lista.

// 2.a) Skriv ut samtliga städer som har en foodRanking på 8 eller högre.
// 2.b) (Extra): Rangordna dessa från högst till lägst foodRanking. Ändra då <ul> till <ol>.

// 3. (Extra). Sortera samtliga städer efter storlek på befolkning.

const cities = [
  {
    city: "London",
    code: "UK",
    population: 11504632,
    foodRanking: 4,
  },
  {
    city: "Manchester",
    code: "UK",
    population: 4280424,
    foodRanking: 5,
  },
  {
    city: "Paris",
    code: "FR",
    population: 10830024,
    foodRanking: 9,
  },
  {
    city: "Nice",
    code: "FR",
    population: 4250024,
    foodRanking: 10,
  },
  {
    city: "Berlin",
    code: "DE",
    population: 8250024,
    foodRanking: 8,
  },
  {
    city: "Munich",
    code: "DE",
    population: 5250050,
    foodRanking: 6,
  },
];

let cityList = document.querySelector("#allCities");

function listAllCities() {
  cities.forEach((obj) => {
    let nLi = document.createElement("li");
    nLi.innerText = obj.city;

    if (obj.code === "FR") {
      nLi.style.color = "blue";
    } else if (obj.code === "UK") {
      nLi.style.color = "red";
    } else {
      nLi.style.color = "";
    }
    // console.log(obj.city);
    cityList.append(nLi);
  });
}

listAllCities();

let foodCity = document.querySelector("#citiesForFoodies");

function sortFoodCities() {
  cities.forEach((obj) => {
    let nLi = document.createElement("li");
    if (obj.foodRanking >= 8) {
      nLi.innerText = `${obj.city} has a food ranking of ${obj.foodRanking}`;
      foodCity.append(nLi);
    }
  });
}

let cityFood = document.querySelector("#citiesFood");

function sortOnFood() {
  //   let sortedFood = cities.sort((a, b) => b.foodRanking - a.foodRanking);
  let sortedFood = Array.from(cities);
  sortedFood.sort((a, b) => b.foodRanking - a.foodRanking);
  sortedFood.forEach((obj) => {
    let nOLI = document.createElement("li");
    nOLI.innerText = `${obj.city} has a food rank of ${obj.foodRanking}`;
    cityFood.append(nOLI);
  });
}
sortOnFood();

sortFoodCities();

let sortByPop = document.querySelector("#sortedByPopulation");

function sortedByPop() {
  //   let sorted = cities.sort((a, b) => b.population - a.population);
  let sorted = Array.from(cities);
  sorted.sort((a, b) => b.population - a.population);
  sorted.forEach((obj) => {
    let nOLI = document.createElement("li");
    nOLI.innerText = `${obj.city} has a population of ${obj.population}`;
    sortByPop.append(nOLI);
  });
}

sortedByPop();

console.log(cities);
