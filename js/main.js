var title = document.getElementById("title").innerHTML = document.title;
var date = document.getElementById("date").innerHTML =  Date();
var resultjoueur = "Vous avez choisie :" ;
var ordi = Math.random();
var joueur;
var pfc = "";
var scoreJoueur = 0 + document.getElementById("scoreJoueur").innerHTML;
var scoreOrdi = 0;
var vs = " vs ";


function random() {
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

}

// alert(resultjoueur + joueur);
// alert("Le choix ordi est :" + ordi);


// FUNCTION BUTTON 
//
//
// CONDITION OF GAME

function choix(compareChoise){
switch (compareChoise) { 

  case "pierre":
    if (ordi == "pierre") {//joueur choisie pierre et ordi :pierre
      alert(resultjoueur + "Pierre" + pfc + vs + ordi) ;
      alert("égalité");
      

    } else if (ordi == "feuille") { //ordi choisie feuille 
      alert(resultjoueur + "Pierre" + pfc + vs + ordi);
      alert("vous avez perdu!");
      alert(scoreOrdi);
      scoreOrdi++

    } else {  // ordi choisie ciseaux 
      alert(resultjoueur + "Pierre" + pfc + vs + ordi);
      alert("vous avez gagné !") ; 
      alert(scoreJoueur);
      scoreJoueur++
    }
    break;
 

  case "feuille": 
    if (ordi == "pierre") {
      alert(resultjoueur +"Feuille" + pfc + vs + ordi);
      alert("vous avez gagné !");
      alert(scoreJoueur);
      scoreJoueur++
      }
    
      // joueur choisie Feuille et ordi : pierre
      
    else if (ordi == "feuille") {
      alert("égaliter !");
    }
      // ordi choisie feuille
    
    else {
      alert(resultjoueur +"Feuille" + pfc + vs + ordi);
      alert("vous avez perdu!");
      alert(scoreOrdi);
      scoreOrdi++
    } 
      // ordi choisit ciseaux
    
    break;
    
  case "ciseau":  // joueur choisit : ciseaux
     if (ordi == "pierre") {
      alert(resultjoueur+ "Feuille" + pfc + vs + ordi);
      alert("vous avez perdu!");
      alert(scoreOrdi);
      scoreOrdi++
     } 
    // ordi choisit pierre
    
     else if (ordi == "feuille") {
      alert(resultjoueur+"Feuille" + pfc + vs + ordi);
      alert("vous avez gagné !");
      alert(scoreJoueur);
      scoreJoueur++

     }
    // ordi choisit feuille
    
     else  {
       alert("égaliter !");
     }
    // ordi choisit ciseaux

   break;

 default:
 alert("erreur , veux tu rejouer ?");

 return (random); 
}
}

