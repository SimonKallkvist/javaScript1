let box = document.querySelector(".testBox");

console.log(box);

box.innerHTML = `<h2>Hej där</h2>`;

// 1. skapa element

let newThing = document.createElement("h2");

// 2. Ge elemet värden
newThing.innerText = "Hej där jag är skapad med javaScript!";

// 3. Placera ut element i dom
// let body = document.querySelector("body");
// body.append(newThing);
document.body.append(newThing); // Shorthand for body tag in java

// Styling from the java File, will set inline styles not pretty
// newThing.style.fontSize = "100px";
// newThing.style.backgroundColor = "turquoise";
// newThing.style.color = "white";

// newThing.classList.add("differentFont");

let btn = document.querySelector(".btn");

// Arrow Function for an event listener on the button
btn.addEventListener("click", () => {
  //   console.log("Hej där du klickade på mig!");
  newThing.classList.toggle("differentFont");
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});
