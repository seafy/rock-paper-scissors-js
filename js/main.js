var btn = document.getElementById("play");
btn.onclick  = jeu;

function jeu  () {

var joueur = prompt("pierre feuille ou ciseaux?");
var resultjoueur = "Votre choix :";
var ordi = Math.random();


 
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

alert(resultjoueur + joueur);
alert("Le choix ordi est :" + ordi);





switch (joueur) { 

  case "pierre":
    if (ordi == "pierre") {//joueur choisie pierre et ordi :pierre
      alert("égaliter !");
      
    } else if (ordi == "feuille") { //ordi choisie feuille
      alert("vous avez perdu !");
    
    } else {  // ordi choisie ciseaux
      alert("vous avez gagner !");
     
    }
    break;
 

  case "feuille": 
    if (ordi == "pierre") {
      alert("vous avez gagner !");
      }
    
      // joueur choisie Feuille et ordi : pierre
      
    else if (ordi == "feuille") {
      alert("égaliter !");
    }
      // ordi choisie feuille
    
    else {
      alert("vous avez perdu !");
    } 
      // ordi choisit ciseaux
    
    break;
    
  case "ciseaux":  // joueur choisit : ciseaux
     if (ordi == "pierre") {
       alert("vous avez perdu !");
     } 
    // ordi choisit pierre
    
     else if (ordi == "feuille") {
       alert("vous avez gagner !");
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

while (joueur && ordi < 3) {
   (joueur) +i;
  i++;
}

}
