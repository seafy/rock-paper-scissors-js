var title = document.getElementById("title").innerHTML = document.title;
var date = document.getElementById("date").innerHTML =  Date();
var resultjoueur = "Votre choix :" ;
var ordi = Math.random();
var joueur;
var pfc = "";
var scoreJoueur = 0;
var scoreOrdi = 0;
var vs = " vs ";

console.log("ordi num: " + ordi);
if (ordi < 0.33) {
  ordi = "pierre";
}

else if (ordi < 0.66) {
  ordi = "feuille";
}

else {
  ordi = "ciseaux";
}

// alert(resultjoueur + joueur);
// alert("Le choix ordi est :" + ordi);


// FUNCTION BUTTON 
function jeu  () {

// CONDITION OF GAME

}

function choix(compareChoise){
switch (compareChoise) { 

  case "pierre":
    if (ordi == "pierre") {//joueur choisie pierre et ordi :pierre
      alert(resultjoueur + pfc + vs + ordi) + alert("égalité");

    } else if (ordi == "feuille") { //ordi choisie feuille
      scoreOrdi++
      console.log(scoreOrdi); 
      alert( (resultjoueur + pfc + vs + ordi ) + ("vous avez perdu!") +(scoreOrdi) );

    } else {  // ordi choisie ciseaux 
      scoreJoueur++
      console.log(scoreJoueur);
      alert(resultjoueur + pfc + vs + ordi) + alert("vous avez gagné !") + alert(scoreJoueur);
    }
    break;
 

  case "feuille": 
    if (ordi == "pierre") {
      scoreJoueur++
      alert(resultjoueur + pfc + vs + ordi) + alert("vous avez gagné !") + alert(scoreJoueur);
      }
    
      // joueur choisie Feuille et ordi : pierre
      
    else if (ordi == "feuille") {
      alert("égaliter !");
    }
      // ordi choisie feuille
    
    else {
      alert(ordi);
      scoreOrdi++
      alert(resultjoueur + pfc + vs + ordi) + alert("vous avez perdu!") + alert(scoreOrdi);
    } 
      // ordi choisit ciseaux
    
    break;
    
  case "ciseau":  // joueur choisit : ciseaux
     if (ordi == "pierre") {
       scoreOrdi++
      alert(resultjoueur + pfc + vs + ordi) + alert("vous avez perdu!") + alert(scoreOrdi);
     } 
    // ordi choisit pierre
    
     else if (ordi == "feuille") {
      scoreJoueur++
      console.log(scoreJoueur);
      alert(resultjoueur + pfc + vs + ordi) + alert("vous avez gagné !") + alert(scoreJoueur);
     }
    // ordi choisit feuille
    
     else  {
       alert("égaliter !");
     }
    // ordi choisit ciseaux

   break;

 default:
 alert("erreur , veux tu rejouer ?");
}
}

