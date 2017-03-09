console.log("Exercice");

  var solution = Math.floor(Math.random() * 4);
  console.log(solution);
  var reponse = prompt("write number between 0 and 3");
  console.log(reponse);
  for(var i = 0; i <= 2; i ++){	
  	var reponse = prompt("Try again")
  		if (i == 2){
  			console.log('You loose')
  		}
  		if (reponse == solution) {
  			console.log('You WIN')
  			break;
  		}
  		if (reponse < solution) {
  			console.log('More High')
  		}
  		else {
  			console.log('More Small')
  		}
  	};


// function solution(min, max) {
//  min = Math.ceil(1);
//  max = Math.floor(4);
//  return Math.floor(Math.random() * (3 - 0)) + 0;
// }
// console.log(solution());


// function question(reponse) {
// var reponse = prompt('entrer un chiffre entre 0 et 3');
// return reponse;
// }
// console.log(question());

