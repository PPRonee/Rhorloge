// Séléctionner les aiguilles de montre
// const AIGUILLEHR = document.querySelector("#hour");
// const AIGUILLEMIN = document.querySelector("#minute");
// const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

// let current = new Date();

// let MonHeure = new Object({
//   heures: current.getHours(),
//   minutes: current.getMinutes(),
//   secondes: current.getSeconds(),
// });

// let heureAAfficher = Heure + ":" + minutes + ":" + secondes;

//Stocker l'heure , minute , seconde  dans des varaiables

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// Déplacer les aiguilles
// function demarrerLaMontre() {}
// Exercuter la fonction chaque second
// var interval = setInterval(demarrerLaMontre, 1000);

//date
const date = new Date();
const hours = ((date.getHours() + 11) % 12) + 1;
const minutes = date.getMinutes();
const seconds = date.getSeconds();

//degres
let hour = hours * 30;
let minute = minutes * 6;
let second = seconds * 6;

//afficher

function clock() {
  second += 6;
  document.querySelector("#second").style.transform = `rotate(${second}deg)`;

  minute += 0.1;
  document.querySelector("#minute").style.transform = `rotate(${minute}deg)`;

  hour += 0.0083;
  document.querySelector("#hour").style.transform = `rotate(${hour}deg)`;
}

const test = setInterval(clock, 1000);

//----------------------------------------------->
let paragraphe = document.querySelector("#Myclock");

let heureAAfficher = date.getHours() - 6 + ":" + minutes + ":" + seconds;

paragraphe.innerHTML = heureAAfficher;

// //----------------------------------------------->
// let paragraphe = document.getElementById("#Myclock2");

// let heureAAfficher2 = date.getHours() - 4 + ":" + minutes + ":" + seconds;

// paragraphe.innerHTML = heureAAfficher2;
