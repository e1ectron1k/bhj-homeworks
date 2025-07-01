const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function holeClickHandler(event) {
    const hole = event.target;
    
    if (hole.classList.contains('hole_has-mole')) {
        deadCounter.textContent = parseInt(deadCounter.textContent) + 1;
        
        if (parseInt(deadCounter.textContent) === 10) {
            alert('Победа! Вы убили 10 кротов!');
            resetGame();
        }
    } else {
        lostCounter.textContent = parseInt(lostCounter.textContent) + 1;
        
        if (parseInt(lostCounter.textContent) === 5) {
            alert('Поражение! Вы набрали 5 промахов!');
            resetGame();
        }
    }
}

function resetGame() {
    deadCounter.textContent = '0';
    lostCounter.textContent = '0';
}

for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', holeClickHandler);
}