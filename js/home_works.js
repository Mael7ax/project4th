const gmailInput = document.getElementById('gmail_input');
const gmailBtn = document.getElementById('gmail_button');
const gmailRes = document.getElementById('gmail_result');

let regExp = /^\w{3,}@\w+\.\w{2,4}\D$/

gmailBtn.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailRes.innerText='OK';
        gmailRes.style.color ='green';
    }else{
        gmailRes.innerText='Error';
        gmailRes.style.color ='red';
    }
}

let moveX = 0
let moveY = 0
const block = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');
const sizeX = parentBlock.clientWidth - block.offsetWidth;
const sizeY = parentBlock.clientHeight - block.offsetHeight;
function moveBlock() {
    if (moveY === 0 && moveX < sizeX) {
        moveX++;
        block.style.left = `${moveX}px`;
    }
    else if (moveX >= sizeX && moveY < sizeY) {
        moveY++;
        block.style.top = `${moveY}px`;
    }
    else if (moveY >= sizeY && moveX > 0) {
        moveX--;
        block.style.left = `${moveX}px`;
    }
    else if (moveX === 0 && moveY > 0) {
        moveY--;
        block.style.top = `${moveY}px`;
    }
    requestAnimationFrame(moveBlock);
}
moveBlock();

let seconds = 0;
let intervalId = null;

const secondsDisplay = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');


startBtn.addEventListener('click', () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            seconds++;
            secondsDisplay.textContent = seconds;
        }, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    secondsDisplay.textContent = seconds;
});


