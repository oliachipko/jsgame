for ( let i = 0; i < 9; i++ ) {
    document.getElementById('game').innerHTML+='<div class="block"></div>';
}

let hod = 0;

document.getElementById('game').onclick = function(event) {
    console.log(event);
    if (event.target.className == 'block') {
        if (hod % 2 == 0) {
            event.target.innerHTML = 'x';
        }
        else {
            event.target.innerHTML = '0';
        }
        hod++;
        checkWinner();
        
    } 
}

function checkWinner() {
    let allblock = document.getElementsByClassName('block');
    if (allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x') 
    alert('Хрестики виграли');
    if (allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x') 
    alert('Хрестики виграли');
    if (allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x') 
    alert('Хрестики виграли');
    if (allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x') 
    alert('Хрестики виграли');
 }


