

const select = document.querySelector('.select');
select.addEventListener('change', function(){

    
    const game = select.game.value;
    console.log(game);

    if(game == 'memory'){
        window.location.href = 'memoria.html';
    }

});

