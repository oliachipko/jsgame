for ( let i = 0; i < 9; i++ ) {
    document.getElementById('game') .innerHTML+='<div class="block"></div>';
}

document.getElementById('game').onclick = function(event) {
    console.log(event);
}