// Skapa en Att göra-lista (todo-list). Användaren ska kunna fylla i ett textfält med något personen behöver göra (diska, städa, köpa kattmat etc). Användaren ska sedan kunna klicka på en knapp för att lägga till ärendet i en Att göra-lista.
// (Extra/Svår) Kan du sätta en maxgräns på fem ärenden i Att göra-listan? Testa!
// (Extra/Svår) När användaren skapar ett ärende, ska även en knapp för att radera ärendet skapas bredvid. När användare klickar på knappen, ska ärendet försvinna.

let actualList = document.querySelector("#actualList");
let todoBtn = document.querySelector("#addToList");

let todoArr = [];

todoBtn.addEventListener("click", () => {
  if (todoArr.length < 5) {
    let todoItem = document.querySelector("#todoItems").value;
    let newLi = document.createElement("li");
    let newBtn = document.createElement("button");
    newBtn.innerText = "Remove";
    newLi.innerText = todoItem;
    newLi.appendChild(newBtn);
    actualList.append(newLi);
    todoItem.value = "";
    todoArr.push(1);
  } else {
    alert("TO MANY ITEMS FPR YOUR TINY BRAIN BIIIITCH");
  }
  console.log(todoArr);
});

actualList.addEventListener("click", (e) => {
  if ((e.target.tagName = "button")) {
    e.target.parentElement.remove();
    todoArr.pop();
  }
});

// Skapa en simpel kalkylator. Det ska finnas två input-fält som tar in varsitt nummer, och när användaren fyllt i bägge och klickar på en knapp ska dessa två värdena adderas med varandra (+). Visa ut resultatet i DOM:en.
let res = document.querySelector("#results");

function addNumbers() {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;

  let result = +num1 + +num2;
  res.innerText = result;

  num1 = "";
  num2 = "";
}

function subNumbers() {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;

  let result = +num1 - +num2;
  res.innerText = result;

  num1 = "";
  num2 = "";
}

function multiNumbers() {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;

  let result = +num1 * +num2;
  res.innerText = result;

  num1 = "";
  num2 = "";
}

// Skapa ytterligare en knapp för att multiplicera dessa tal med varandra.

// Skapa en knapp för att subtrahera dessa tal med varandra (tal1 - tal2). Om resultatet blir mindre än 0, skriv ut ett snällt felmeddelande i webbläsaren, där det står tydligt vad användaren gjort fel och behöver rätta till för att få det att fungera.

// Låt användaren skriva in en siffra mellan 0-10 i ett input-fält. Om talet är mindre än 4, färga den röd. Om den är mellan 4-7, färga talet gult. Om talet är över 7, färga den grön. Om talet är över 11 eller under 0, skriv ut ett felmeddelande där du beskriver vad användaren gjort fel (dvs om talet är för stort/litet).
