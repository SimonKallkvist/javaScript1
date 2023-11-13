// BESKRIVNING AV UPPGIFT:

// Ankademin har köpt upp ett café som tidigare hette Ernst Kafeteria.
// Din uppgift är att uppdatera sajten med hjälp av endast Javascript.

// 1. Ändra namnet till "Ankademin Café".

let h1Name = document.getElementById("namn");
h1Name.innerText = "Ankademin Café";
// 2. Ändra slogan till "Stockholms no.1 coding café!"
let h2Slogan = document.querySelector("#slogan");
h2Slogan.innerText = "Stockholms no.1 coding café!";

// 3. Ändra bakgrundsfärg på webbsidan till en valfri färg.
document.body.style.backgroundColor = "lightblue";

// 4. Ändra priset på samtliga produkter till 19 kr.
let price = document.querySelectorAll(".pris");
price.forEach((price) => {
  price.innerText = "19kr";
});

// console.log(price.innerText);

//    4a. (Svår) Ändra priset på Frukostmacka till 15kr.
let frukostMacka = document.getElementsByTagName("li")[2];
frukostMacka.innerText = "Frukostmacka 15kr";

// 5. Lägg in en sista produkt i det tomma li-elementet samt ett span-element med pris (se övriga produkter).

let ulList = document.querySelector("ul");

ulList.lastElementChild.innerHTML = `Kaka <span class='pris'>19kr</span>`;

// let lastItem = document.getElementsByClassName(".produkter").lastElementChild;
// lastItem.innerHTML = `Kaka <span class='pris'></span>`;

// let newListItem = document.createElement("");
// newListItem.innerHTML = `Ny produkt - <span> 15 kr </span>`;

// let newListItem = document.querySelector(".produkter:last-child");
// console.log(newListItem);
// list.appendChild(newListItem);

// 6. Skapa en h3:a under produkterna, där det står: "Öppettider: Alla dagar kl 18-21"
let newH3 = document.createElement("h3");
newH3.innerText = "Öppettider: Alla dagar kl 18-21";

let website = document.querySelector("#website");

website.append(newH3);

// 7. Skapa en p-tag under h3:an där det står "Till Ankademin Café är alla välkomna att sitta och koda och ta en mysig fika!".
let newP = document.createElement("p");
newP.innerText =
  "Till Ankademin Café är alla välkomna att sitta och koda och ta en mysig fika!";

website.append(newP);
// 8. Ändra färg på samtliga p-taggar till en mörkröd färg.

let allP = document.querySelectorAll("p");
allP.forEach((allP) => {
  allP.style.color = "darkred";
});

// console.log(allP);
// LYCKA TILL!

// Länkar som kan underlätta:

// Hur man hittar element på DOM:en:
// https://www.w3schools.com/js/js_htmldom.asp (Bläddra framåt)

// Hur man kan ändra CSS i Javascript:
// https://www.w3schools.com/js/js_htmldom_css.asp

// Metoder ni kan/bör använda (kolla upp om ni är osäkra på hur):

// document.querySelector()

// document.querySelectorAll() + Foreach-metoden
