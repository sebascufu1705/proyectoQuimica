
const authWith = document.querySelector('.authWith');

firebase.auth().onAuthStateChanged(function(user) {

    //usuario ya inicio sesion o ya se registro
    if(user) {
        authWith.classList.remove('hidden');

    }else {
    //el usuario no ha iniciado sesion o cerro la sesion

        authWith.classList.add('hidden');
    }

  });

authWith.addEventListener('click', function(event){

    event.preventDefault();
    firebase.auth().signOut();
    authWith.classList.add('hidden');
    window.location.href = 'index.html';

});