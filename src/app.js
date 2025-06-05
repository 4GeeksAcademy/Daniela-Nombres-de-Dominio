import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
for (let index = 0; index <pronoun.length; index++) { 
  for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
     const element = pronoun[index] + adj[j] + noun[k] + ".com";
    console.log(element)
      
    }

      

      
    
      

  }
}
};
