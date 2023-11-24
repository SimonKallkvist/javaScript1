document.addEventListener("DOMContentLoaded", function () {
  let addPlayer = document.querySelector("#addPlayerBtn");
  let childCountA = document.querySelector("#teamA");
  let childCountB = document.querySelector("#teamB");
  let changeNameA = document.querySelector("#changeNameA");
  let changeNameB = document.querySelector("#changeNameB");

  // Move the changeName and related variables outside the click event listener
  let popUp = document.querySelector(".popUp");
  let changeName = document.querySelector(".nameChange");

  changeName.addEventListener("click", () => {
    const playerNameElement = popUp.previousElementSibling.querySelector("li.selected p");
    if (playerNameElement) {
      playerNameElement.innerText = document.querySelector("#editPlayer").value;
      popUp.classList.remove("popUpShow");
    }
  });

  // Function to change team name
  function changeTeamName(teamNameElement, inputElement) {
    teamNameElement.innerText = inputElement.value;
    inputElement.value = ""; // Clear the input field
  }

  // Event listeners for changing team names
  changeNameA.addEventListener("click", () => {
    changeTeamName(document.querySelector("#lagAName"), document.querySelector("#lagA"));
  });

  changeNameB.addEventListener("click", () => {
    changeTeamName(document.querySelector("#lagBName"), document.querySelector("#lagB"));
  });

  addPlayer.addEventListener("click", () => {
    let newPlayer = document.createElement("li");
    let playerName = document.createElement("p");
    playerName.innerText = document.querySelector("#addPlayer").value;

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove from team";

    let changeTeam = document.createElement("button");
    changeTeam.innerText = "Change teams";

    let changePlayerName = document.createElement("button");
    changePlayerName.innerText = "Edit player";

    newPlayer.appendChild(playerName);
    newPlayer.appendChild(removeBtn);
    newPlayer.appendChild(changeTeam);
    newPlayer.appendChild(changePlayerName);

    removeBtn.addEventListener("click", () => {
      newPlayer.remove();
    });

    changeTeam.addEventListener("click", () => {
      if (
        newPlayer.parentElement.id === "teamA" &&
        childCountB.childElementCount < 5
      ) {
        newPlayer.remove();
        childCountB.append(newPlayer);
      } else if (
        newPlayer.parentElement.id === "teamB" &&
        childCountA.childElementCount < 5
      ) {
        newPlayer.remove();
        childCountA.append(newPlayer);
      } else alert("That team is Full!");
    });

    console.log(childCountA.childElementCount);

    changePlayerName.addEventListener("click", () => {
      popUp.classList.add("popUpShow");
    });

    if (childCountA.childElementCount <= 4) {
      childCountA.append(newPlayer);
    } else if (childCountB.childElementCount <= 4) {
      childCountB.append(newPlayer);
    } else {
      alert("Can't have uneven teams, idiot");
    }
  });

  // Add click event listener for each player to mark it as selected
  document.querySelectorAll("#teamA li, #teamB li").forEach(player => {
    player.addEventListener("click", () => {
      // Remove "selected" class from all players
      document.querySelectorAll("#teamA li, #teamB li").forEach(p => p.classList.remove("selected"));
      // Add "selected" class to the clicked player
      player.classList.add("selected");
    });
  });
});

/* // Ovanför listorna av spelare ska lagnamnet stå (i t.ex. en <h2>:a). Ovanför varje lagnamn ska det även
// finnas ett textfält med
// en knapp där det står “Change Team-name”, som du kan klicka på för att ändra lagnamnen till valfritt namn.

// Ändra lagnamn -------->



let changeAteam = document.getElementById("changeNameA");
console.log(changeAteam);
changeAteam.addEventListener("click", () => {
  //   let newName = document.querySelector("#lagA");
  //   let teamName = document.querySelector("#lagAName");
  document.querySelector("#lagAName").innerText =
    document.querySelector("#lagA").value;

  //   teamName.innerText = newName.value;
});
let changeBteam = document.getElementById("changeNameB");
console.log(changeBteam);
changeBteam.addEventListener("click", () => {
  //   let newName = document.querySelector("#lagA");
  //   let teamName = document.querySelector("#lagAName");
  document.querySelector("#lagBName").innerText =
    document.querySelector("#lagB").value;

  //   teamName.innerText = newName.value;
});

// Skapa ett inputfält där du kan skriva in spelarnas namn, och en knapp bredvid med texten “Add player”.
// När en spelares namn läggs till, läggs spelaren till i Lag A tills att laget är fullt (max 5 spelare).
// Om Lag A är fullt när en spelare läggs till, placeras personen i Lag B.
// Om bägge lagen är fulla, ska det inte gå att lägga till fler spelare.

// Lägg till Spelare ------------>

let addPlayer = document.querySelector("#addPlayerBtn");
let childCountA = document.querySelector("#teamA");
let childCountB = document.querySelector("#teamB");

 // Move the changeName and related variables outside the click event listener
 let popUp = document.querySelector(".popUp");
 let changeName = document.querySelector(".nameChange");

 changeName.addEventListener("click", () => {
  const playerNameElement = popUp.previousElementSibling.querySelector("li p");
  if (playerNameElement) {
    playerNameElement.innerText = document.querySelector("#editPlayer").value;
    popUp.classList.remove("popUpShow");
  }
});


addPlayer.addEventListener("click", () => {
  let newPlayer = document.createElement("li");
  let playerName = document.createElement("p");
  playerName.innerText = document.querySelector("#addPlayer").value;

  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove from team";

  let changeTeam = document.createElement("button");
  changeTeam.innerText = "Change teams";

  let changePlayerName = document.createElement("button");
  changePlayerName.innerText = "Edit player";

  newPlayer.appendChild(playerName);
  newPlayer.appendChild(removeBtn);
  newPlayer.appendChild(changeTeam);
  newPlayer.appendChild(changePlayerName);

  removeBtn.addEventListener("click", () => {
    newPlayer.remove();
    // console.log(childCountA.childElementCount, childCountB.childElementCount);
  });

  changeTeam.addEventListener("click", () => {
    if (
      newPlayer.parentElement.id === "teamA" &&
      childCountB.childElementCount < 5
    ) {
      newPlayer.remove();
      childCountB.append(newPlayer);
    } else if (
      newPlayer.parentElement.id === "teamB" &&
      childCountA.childElementCount < 5
    ) {
      newPlayer.remove();
      childCountA.append(newPlayer);
    } else alert("That team is Full!");
  });

  console.log(childCountA.childElementCount);

  // let popUp = document.querySelector(".popUp");

  changePlayerName.addEventListener("click", () => {
    popUp.classList.add("popUpShow");
  });

  // let changeName = document.querySelector(".nameChange");

  // changeName.addEventListener("click", (e) => {
  //   console.log(playerName);
  //   changePlayerName.parentElement.firstChild.innerText =
  //     document.querySelector("#editPlayer").value;
  //   popUp.classList.remove("popUpShow");
  // });

  if (childCountA.childElementCount <= 4) {
    childCountA.append(newPlayer);
  } else if (childCountB.childElementCount <= 4) {
    childCountB.append(newPlayer);
  } else {
    alert("Cant have unenven teasm idiot");
  }
});

document.querySelectorAll("#teamA li, #teamB li").forEach(player => {
  player.addEventListener("click", () => {
    // Remove "selected" class from all players
    document.querySelectorAll("#teamA li, #teamB li").forEach(p => p.classList.remove("selected"));
    // Add "selected" class to the clicked player
    player.classList.add("selected");
  });
});


// Bredvid varje spelare ska det finnas en knapp där det står “Leave Team”, som tar bort spelaren från laget.

// Ta bort Spelare från laget -------------->

// let removeBtn = document.createElement("button");
//   removeBtn.innerText = "Remove from team";

//   newPlayer.appendChild(removeBtn);

//   removeBtn.addEventListener("click", () => {
//     newPlayer.remove();
//   });

// (Svår) Bredvid varje spelare ska det också finnas en knapp där det står “Change Team”,
// som flyttar spelaren till motståndarlaget, men endast om det finns plats.
// (Extra - Om ni blir klara) - Lägg till en knapp för att redigera en spelares namn.
*/