"use strict"

const select = document.querySelector('.js-select');
const btn = document.querySelector(".js-btn");
const text = document.querySelector(".js-text");

let fuerza="";

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
  
function random(){
     debugger;
    
        const randomNumber = getRandomNumber(5)
       if(randomNumber === 1){
        fuerza = 2
       }else  if(randomNumber === 2){
        fuerza = 2
        }else if(randomNumber === 3){
        fuerza = 2
       }else if(randomNumber === 4){
        fuerza = 3
       }else if(randomNumber === 5){
        fuerza = 5
       };
      
    
    }
    

function comparation (fuerza){
    const selectValue = select.value;
    if(selectValue > fuerza){
        text.innerHTML= "Ha ganado el ejercito del bien! Enhorabuena."
     } else if ( selectValue < fuerza){
        text.innerHTML= "Ha ganado el ejercito del mal! Vuelva a intentarlo."
     } else if (selectValue === fuerza){
        text.innerHTML= "Empate"
     };  
     return text
   
}

function marcador (){
    if (text = "Ha ganado el ejercito del bien! Enhorabuena."){

    }
    for( let i = 0; )
    
}
  




function  handleClick(e){
    e.preventDefault();
    random();
    comparation(fuerza);
marcador(text)
   
  
};

btn.addEventListener("click",handleClick)
    




