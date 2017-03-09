console.log("Exercice");

function solution(min, max) {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (3 - 0)) + 0;
}
console.log(solution());


function question(reponse) {
var reponse = prompt('entrer un chiffre entre 0 et 3');
return reponse;
}
console.log(question());