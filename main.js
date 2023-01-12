
// *Option via toggle

let btnNight = document.querySelector('.night-mode-btn'),
    nightBody = document.querySelector('body');

btnNight.addEventListener("click", function () {

    nightBody.classList.toggle('night');
    
    if (nightBody.classList.toggle('nigth')) {
        btnNight.textContent = 'Выключить ночной режим'
    } else {
        btnNight.textContent = 'Включить ночной режим'
    }

});

// *Option via - contains, remove, add

/* 

let btnNight = document.querySelector('.night-mode-btn'),
    nightBody = document.querySelector('body');

btnNight.addEventListener('click', nigthMode);

function nigthMode() {
    let checking = nightBody.classList.contains('night');
    console.log(checking)

    if (checking) {
        nightBody.classList.remove('night');
        btnNight.textContent = 'Включить ночной режим';
    } else {
        nightBody.classList.add('night');
        btnNight.textContent = 'Выключить ночной режим';
    }
}

*/

