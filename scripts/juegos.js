

const select = document.querySelector('.select');
select.addEventListener('click', function(){

    const game = select.game.value;

    
    
    if(game === 'memory'){
        window.location.href = 'memoria.html';
        console.log(game);
    }

});

