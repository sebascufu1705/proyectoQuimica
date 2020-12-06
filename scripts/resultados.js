
var tiempo = 0;
var progreso = 0;
var puntuacion = 0;

 tiempo = localStorage.getItem('tiempo');
 progreso = localStorage.getItem('progreso');
 puntuacion = localStorage.getItem('puntuacion');
function showResults(){
    id=document.getElementById("result");
    id.innerHTML= ` <h1>Tiempo: ${tiempo}s restantes</h1>
    <div class="puntuacion"> <h1>Puntuacion: X${puntuacion}</h1><img src="./img/estrella.png" alt="estrella"></div>
    <h1>Progreso: ${progreso}/13</h1>`
}
showResults();
console.log(tiempo);
console.log(progreso);
console.log(puntuacion);