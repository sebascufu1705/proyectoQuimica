const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matched =0;
let time =120;
let puntuacion=0;
if(matched<14){
setInterval( function(){
  
    time--;
  
  

  if( time>=0){
    id=document.getElementById("count");
    id.innerHTML= `<h1>Tiempo: ${time}</h1>`;
  }

  if(time>=60){
    id=document.getElementById("estrellas");
    id.innerHTML='<img src="./img/estrella.png" alt="estrella"> <img src="./img/estrella.png" alt="estrella"> <img src="./img/estrella.png" alt="estrella">';
 puntuacion=3;
  }

  else if(time>=30){
    id=document.getElementById("estrellas");
    id.innerHTML=' <img src="./img/estrella.png" alt="estrella"> <img src="./img/estrella.png" alt="estrella">';
    puntuacion=2;
  } 
  
  else if(time<30){
    id=document.getElementById("estrellas");
    id.innerHTML='<img src="./img/estrella.png" alt="estrella">';
    puntuacion=1;
  } 

  if(time<=0){
    ActivityFinish();
  }
 
},1000);
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}


function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();


}

function ActivityFinish(){
  window.location.href = 'resultadosMemoria.html';
  
  id=document.getElementById("resultados");
    id.innerHTML= `<h1>Tiempo: ${time} </h1>
    <h1>Puntuacion:X${puntuacion}</h1><img src="./img/estrella.png" alt="estrella">
    <h1>Progreso: ${matched}/14 </h1>`;
    
}


function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  matched+=1;
  console.log(matched);
  id=document.getElementById("matched");
    id.innerHTML= `<img src="./img/progres.png" alt=""> <h2>${matched}/14</h2>`;
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
time-=1;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));