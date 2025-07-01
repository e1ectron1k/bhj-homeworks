const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clickCount = 0;
let isSmall = false;
const originalWidth = 200;
const smallWidth = 180;

cookie.onclick = function() {
    clickCount++;
    counter.textContent = clickCount;
    
    if (isSmall) {
        cookie.width = originalWidth;
    } else {
        cookie.width = smallWidth;
    }
    
    isSmall = !isSmall;
};