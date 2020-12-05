var tiempo = localStorage.getItem('tiempo');
var progreso = localStorage.getItem('progreso');
var puntuacion = localStorage.getItem('puntuacion');
function showResults(){
    id=document.getElementById("result");
    id.innerHTML= ` <h1>Tiempo: ${tiempo}</h1>
    <div class="puntuacion"> <h1>Puntuacion: X${progreso}</h1><img src="./img/estrella.png" alt="estrella"></div>
    <h1>Progreso: ${puntuacion}/13</h1>`
}
showResults();
console.log(tiempo);
console.log(progreso);
console.log(puntuacion);