"use strict"

const select = document.querySelector('.js-select');
const btn = document.querySelector(".js-btn");
const text = document.querySelector(".js-text");
const player = document.querySelector(".js-jugador");
const computadora = document.querySelector(".js-computadora");
let fuerza="";
let user="";
let pc="";

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
        user++;
        player.innerHTML= `Jugador : ${user}`;
     } else if ( selectValue < fuerza){
        text.innerHTML= "Ha ganado el ejercito del mal! Vuelva a intentarlo."
        pc++;
        computadora.innerHTML= `Ordenador : ${pc}`;
     } else if (selectValue === fuerza){
        text.innerHTML= "Empate"
     };  
    
   
}
function  handleClick(e){
    e.preventDefault();
    random();
    comparation(fuerza);

   
  
};
btn.addEventListener("click",handleClick)
    




