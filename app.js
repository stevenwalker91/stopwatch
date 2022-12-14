const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const display = document.getElementById('counter-display');

startBtn.addEventListener('click', function () {
    timerStatus = true;
    startBtn.disabled = true;
    startStopwatch();
});

stopBtn.addEventListener('click', function () {
    timerStatus = false;
    startBtn.disabled = false;
    
});

resetBtn.addEventListener('click', function () {
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
});

let timerStatus = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStopwatch() {
    //first check if timer is enabled, otherwise stop the function
    if (!timerStatus) {
        return;
    }

    //increase the timer
    if (seconds < 59 ) {
        seconds ++;
    } else if (seconds == 59 && minutes == 59) {
        seconds = 0;
        minutes = 0;
        hours ++;
    } else {
        seconds = 0;
        minutes ++;
    }
    
    
    updateDisplay();
    setTimeout(startStopwatch, 1000);
}

function formatNumber(numberInput) {
    return numberInput.toLocaleString('en-GB', {minimumIntegerDigits: 2})
}

function updateDisplay(){
    display.innerText = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`
}