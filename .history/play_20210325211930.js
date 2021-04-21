for ( let i = 0; i < 9; i++ ) {
    document.getElementById('game') .innerHTML+='<div class="block"></div>';
}

let hod = 0;

document.getElementById('game').onclick = function(event) {
    console.log(event);
    if(event.target.className == 'block'){
        if (hod%)
        event.target.innerHTML = '0';
    } 
}