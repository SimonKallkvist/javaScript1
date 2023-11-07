// for-loops
// for(let x = 0; x < 5; x++){
//     console.log(x);
// };


// let myArray = [11,22,33,44,55];

// for(let x = 0; x < myArray.length; x++){
//     console.log(myArray[x]);
// }

// while-loop
// let x = 0;
// while(x < 5){
//     console.log(x + ' mindre än 5');
//     x++;
// };

// // for-in loop
// let person = {
//     name: 'Lol',
//     age: 30,
//     occupation: 'Carpenter'
// };

// for(key in person){
//     console.log('Nyckel namn i Person: ' + key);
//     console.log('Nyckels value: ' + person[key]);
// };


// Funktion med loop
// let shoppingList = [
//     'bröd', 'mjölk', 'ägg', 'juice'
// ];

// function shoppingFunc(list){
//     return list[2];
// };

// console.log(shoppingFunc(shoppingList));

// let otherList = ['Nutella', 'Flingor', 'Kanelbullar'];
// function showArray(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(`list item #${i} + ${arr[i]}`);
//     }
// }

// showArray(shoppingList);
// showArray(otherList);


// Övningsuppgifter
//Tips 
// Globala variabler tex let newArray[];
//Push metoden. newArray.push('Hej');

// 1: Skapa en funktion som loopar igenom en array, och returnera alla jämna tal (som en sträng eller som en ny array.)
// let numArray = [1,2,3,4,5,6,7,8,9,10,20,30,45, 50,32,13,15,17,21];

// function evenNums(arr){
//     let evenArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             evenArr.push(arr[i]);
//     }  
// }
// return evenArr;
// };
// console.log(evenNums(numArray));

// ARROW STYLE
// let numArray = [1,2,3,4,5,6,7,8,9,10,20,30,45, 50,32,13,15,17,21];

// let getEven = (array) => {
//     let evenNum = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             evenNum.push(array[i]);
//         }  
//         }
//     return evenNum;
// }

// console.log(getEven(numArray));

// Method
// let result = numArray.filter(x => x % 2 == 0); 
// console.log(result);

// 2: Skapa en funktion som loopar igenom en array, och multiplicerar alla tal med varandra. 
// T.ex [2,3,4] ska funktionen returnera 24. (2*3*4 = 24).
// let multArray = [3,4,5];

// function multNum(arr){
//     let multipliedNums = 1;
//     for(let i = 0; i < arr.length; i++){
//         multipliedNums *= arr[i];
//     }
//     return multipliedNums;
// }

// console.log(multNum(multArray));

// ARROW STYLE
// let multArray = [4,4,5];

// let muliplied = (arr) => {
//     let multiNums = 1;
//     for(let i = 0; i < arr.length; i++){
//             multiNums *= arr[i];
//         }
//         return multiNums;
// }

// console.log(muliplied(multArray));

// Method Style
// let myValue = multArray.reduce((a,b) => a*b)
// console.log(myValue);

// console.log(multArray.reduce((a,b) => a*b));

// 3: Skapa en funktion som loopar igenom en array och kollar om den innehåller “jordgubbar”. 
// Om den innehåller jordgubbar bör den returneras true, annars returneras false.
// let thingArray = ['Blåbär', 'Hallon', 'jordnötter', 'jordgubbar'];

// function findStrawberries(arr) {
//      let blabla;
//      for(let i = 0; i < arr.length; i++){
//           blabla = Boolean(arr[i] == 'jordnötter');
//      }
//      return blabla;
//  }
//  console.log(findStrawberries(thingArray));

// ARROW STYLE
// let thingArray = ['blåbär', 'Hallon', 'jordnötter', 'jordgubbar', 'pruttar', 'kiss'];

// let find = (arr) => {
//      for(let i = 0; i < arr.length; i++){
//          if(arr[i] == 'jordnötter'){
//             return true;
//          }
//      }
//      return false;
//  }

//  console.log(find(thingArray));

//  // Method Style
//  let foundStraw = thingArray.includes('Hallon');
//  console.log(foundStraw);

//  console.log(thingArray.includes('jordgubbar'));

// 4: Skapa en funktion som ska kunna ta in en array av siffror. 
// Om arrayen har fler jämna tal än ojämna, returnera “Even array”. Om den har fler ojämna än jämna tal, returnera “Odd array”. 
// Om den har lika många jämna som ojämna tal, returnera “Balanced array”.
// let oneList = [1,2,3,4,5,6,7,8,9,10,12];

// function tellEvenOdd(arr) {
//     let even = [];
//     let odd = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             even.push(arr[i]);
//         }else {
//             odd.push(arr[i]);
//         }
//     }

//     if(even.length > odd.length){
//         return 'Even Array';
//     }else if(even.length == odd.length){
//         return 'Balanced array';
//     }else{
//         return 'odd array';
//     }
// }

// console.log(tellEvenOdd(oneList));


// ARROW STYLE
// let oneList = [1,2,3,4,5,6,7,8,9,10,11,13];
// let oddEven = (arr) => {
//     let even = [];
//      let odd = [];

//      for(let i = 0; i < arr.length; i++){
//          if(arr[i] % 2 === 0){
//              even.push(arr[i]);
//          }else {
//              odd.push(arr[i]);
//          }
//      }

//      if (even.length > odd.length) {
//          return 'Even Array';
//      } else if (even.length == odd.length) {
//          return 'Balanced array';
//      } else {
//          return 'odd array';
//      }
//  };

//  console.log(oddEven(oneList));



// 5: Skapa en funktion som tar in en array över förnamn, och returnerar en ny array med alla namn som är längre än 6 bokstäver långa.
// let firstName = ['john', 'doris', 'bigManthings', 'alejandro', 'Mrbombastic'];

// function firsName(arr){
//     let long = [];

//     for(let i = 0; i < arr.length; i++){
//         let name = '';
//         if(arr[i].length > 6){
//             name = arr[i];
//             long.push(name);
//         }
       
//     };

//     return long;
// }

// console.log(firsName(firstName));
// let firstName = ['john', 'doris', 'bigManthings', 'alejandro', 'Mrbombastic', 'tara', 'MyNameIs'];

// let longNames = (arr) => {
//     let long = [];

//      for(let i = 0; i < arr.length; i++){
//         //  let name = '';
//          if(arr[i].length > 6){
//             //  name = arr[i];
//              long.push(arr[i]);
//          }
       
//      };

//      return long;
// }; 

// console.log(longNames(firstName));

// 6: Extra - Lös samtliga uppgifter med array-metoder istället.

// 1: Skapa en funktion som loopar igenom en array, och returnera alla jämna tal (som en sträng eller som en ny array.)
// numArray
// let result = numArray.filter(x => x % 2 == 0); 
// console.log(result);

// 2: Skapa en funktion som loopar igenom en array, och multiplicerar alla tal med varandra. 
// T.ex [2,3,4] ska funktionen returnera 24. (2*3*4 = 24).

// let myValue = multArray.reduce((a,b) => a*b)
// console.log(myValue);



/* --> ANKADEMIN uppgifter <-- */

// 1.a Mattelärarna Emelie och Nanthiporn är trötta på att rätta prov. 
// De har efterfrågat en funktion som tar emot tre argument - namn på elev, elevens poäng, och maxpoäng för provet. 
// Om antal poäng är över 50% av maxpoäng, skriv ut i konsolen “ NAMN är godkänd.” Annars skriv ut “NAMN är underkänd” (NAMN = elevens namn).

let passExam = (studentName, score, max) => {
     if(score > max/2){
         console.log(`${studentName} är godkänd`);
     } else {
         console.log(`${studentName} är underkänd`);
     }
 };
 
 passExam('Simon', 50, 100);

// 1.b Biologilärarna William och Leo vill också ha en liknande funktion, men de önskar ha tydligare betygsättning. 
// Om eleven har över 50% rätt ska de ha betyget E, om de har över 75% ska de få betyget C, och om de har över 95% rätt ska de få betyget A. 
// Om de får under 50% ska de få icke-godkänt (F).

// let passExam2 = (studentName, score, max) => {
//     if(score > max*0.95){
//         console.log(`${studentName} fick A på provet`);
//     } else if (score > max*0.75) {
//         console.log(`${studentName} fick B på provet`);
//     }else if (score > max*0.5) {
//         console.log(`${studentName} fick C på provet`);
//     }else {
//         console.log(`${studentName} fick F på provet`);
//     }
// };

// passExam2('Simon', 75, 100);

// 1.c (Svår) IT-lärarna Linar och Pavel tycker om att se hur deras klasser presterar som grupp. 
// Deras prov har alltid 100 som max antal poäng, så de vill ha en funktion som tar in en array med olika poäng, 
// och returnerar en text med hur många som fått betygen A,C,E samt F (enligt ovanstående betygskriterier).

// let scores = [51,51,76,76,96,96,10,10];

// let testResults = (testScores) => {
//     let gradeA = [];
//     let gradeC = [];
//     let gradeE = [];
//     let gradeF = [];
//     for(let i = 0; i < testScores.length; i++){
//         if(testScores[i] > 95){
//                 gradeA.push(testScores[i]);
//             } else if (testScores[i] > 75){
//                 gradeC.push(testScores[i]);
//             }else if (testScores[i] > 50){
//                 gradeE.push(testScores[i]);
//             }else {
//                 gradeF.push(testScores[i]);
//             }
//     };

//     console.log(`${gradeA.length} students got an A! ${gradeC.length} students got an C! ${gradeE.length} students got an E! ${gradeF.length} students got an F!`)
// };

// testResults(scores);



// 2.A Ekonomilärarna Emma och Hampus undervisar i företagsekonomi, och lär deras elever hur man gör en balansrapport med hjälp av debet och kredit. 
// För att se om siffrorna stämmer, vill de gärna ha en funktion som tar in två siffror som argument
//  - debet och kredit - och ser om dessa är lika stora. Om de är lika stora, skriv ut i konsolen att dessa är lika stora. 
//  Om debet är större än kredit, skriv ut att så är fallet. Om kredit är större, ska detta skrivas ut istället.
// let debetKredit = (debet, kredit) => {
//     if(debet > kredit) {
//         console.log('Debet is larger than kredit');
//     } else if(debet < kredit){
//         console.log('Debit is smaller than kredit')
//     }else {
//         console.log('Debit and kredit are the same!')
//     }
// }

// debetKredit(30,50);

// 2.B (Svår) Anna och Sofie är chefer på företaget Quiz Champions AB, och önskar köpa in funktionen från uppgift 2 till deras företag. 
// Dock har de en massor av kostnader och tillgångar, så funktionen behöver bli lite mer komplex. 
// Istället för två siffror, ta in två arrayer som argument - en array för debet och en array för kredit. 
// Räkna ut den totala summan av dessa arrays. Om summan för bägge arrays är likadana, skriv ut “Balansrapport godkänd”, 
// annars skriv ut “Debet och kredit har inte samma värden.”
// let debitArray = [1,10,3,4,8];
// let kreditArray = [1,9,3,4,8];

// let quizChampionsAb = (debit, kredit) => {
//     let reducedDebit = debit.reduce((a,b) => a*b);
//     let reducedKredit = kredit.reduce((a,b) => a*b);

//     if(reducedDebit < reducedKredit){
//         console.log(`The debitside: "${reducedDebit}" is smaller than the kreditside: "${reducedKredit}"`);
//     } else if (reducedDebit > reducedKredit){
//         console.log(`The debitside: "${reducedDebit}" is larger than the kreditside: "${reducedKredit}"`);
//     } else {
//         console.log(`The debitside: "${reducedDebit}" is the same as the kreditside: "${reducedKredit}"`);
//     }
    
// }

// quizChampionsAb(debitArray,kreditArray);


// 3.a Systemadministratörer Stina och Viktoria har blivit efterfrågade att skicka data om skolan till möjliga sponsorer. 
// Skapa upp en variabel som du definierar som ett objekt innehållandes följande information på engelska:
// Namn: Ankademin
// Antal elever: 38
// Antal lärare: 10
// Skolans motto: Anyone can code!
// Favoritlärare: Brandon
// Är Sveriges bästa skola: sant
// Hundvänlig: sant
// Ormvänlig: falskt
// Lista på locations = Solna, Ankeborg, Duckville(array)
// Maskot = Namn: Miles, ålder: 1, är söt: true (objekt)

// let schoolInfo = {
//     name: 'Ankademin', 
//     sumOfStudents: 38,
//     sumOfTeachers: 10,
//     schoolMotto: 'Anyone can code!',
//     favTeacher: 'Brandon',
//     isBestSchool: false,
//     dogFriendly: true,
//     snakeFriendly: false,
//     locations: ['Solna', 'Ankeborg','Duckville'],
//     mascot: {
//         mName: 'Miles',
//         age: 1, 
//         isCute: true
//     }
// }

// console.log(schoolInfo);

// 3.b Föräldrarna Ludvig, Lukas, Noah och Saga efterfrågar information om skolan, för att avgöra om de ska placera sina barn där. 
// Skapa en funktion som heter sendSchoolInfo som tar in ett objekt, och skriver ut ett meddelande i konsolen med skolans namn, antalet lärare och antalet elever. 
// OM skolan inte är ormvänligt ska även ett meddelande skrivas ut för detta (annars skriv ej ut något). 
// OM det är världens bästa skola ska det även skrivas ut ett meddelande där det står “This is the best school in Sweden!” 
// annars skriv ut ett meddelande där det står “It’s not the best school in Sweden, but still good!”

// let sendSchoolInfo = (object) => {
//     let schoolInfo = `This school is ${object.name}! It has ${object.sumOfTeachers} teachers and ${object.sumOfStudents} students! `;

//     if(object.snakeFriendly === false){
//         schoolInfo += "Unfortunately the school is not Snake friendly. ";
//     }
//     if(object.isBestSchool === true){
//         schoolInfo += `This is the best school in Sweden! `;
//     } else {
//         schoolInfo += `It’s not the best school in Sweden, but still good! `
//     }

//     return schoolInfo;
// }

// console.log(sendSchoolInfo(schoolInfo));

// 3.c Investerarna Hampus och Olivia efterfrågar information om skolans maskot, för att avgöra om de vill sponsra skolans e-sportlag. 
// Skapa en funktion som heter sendMascotInfo som tar in ett objekt. Den ska skriva ut objektets namn och ålder i konsolen. 
// OM maskoten är söt, skriv även ut detta i konsolen. (Om maskoten inte är söt, ska inget mer skrivas ut.) 
// Kör funktionen och skicka med maskot-objektet inuti skol-objektet som argument.

// let sendMascotInfo = (object) => {
//     let mascotInfo = `${object.mascot['mName']} is the name and is ${object.mascot['age']} year old! `;

//     if(object.mascot['isCute'] == true){
//         mascotInfo += `And it is very cute!`;
//     }

//     return mascotInfo;
// }

// console.log(sendMascotInfo(schoolInfo));


// let sendMascotInfo = (object) => {
//     let mascotInfo = `${object.mName} is the name of the mascot and is ${object.age} year old! `;

//     if(object.isCute == true){
//         mascotInfo += `And it is very cute!`;
//     }

//     return mascotInfo;
// }

// console.log(sendMascotInfo(schoolInfo.mascot));



// 4(Svår) Gympalärarna Tobias och Sebastian önskar en funktion för att singla slant när eleverna spelar fotboll på idrottslektionerna, 
// för att bestämma vilket lag som börjar med boll. 
// Gör en funktion som slumpar fram krona eller klave i konsolen (sannolikheten ska vara 50% för bägge scenarios).

// let coin = Math.floor(Math.random() * (2 - 1 + 1)) + 1; 

// let headOrTail = (flip) => {
//     if(flip % 2 === 0){
//         console.log('It´s heads!');
//     } else {
//         console.log('It`s Tails');
//     }
// }

// headOrTail(coin);