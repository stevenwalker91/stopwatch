const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const display = document.getElementById('counter-display');

startBtn.addEventListener('click', function () {
    timerStatus = true;
    startStopwatch();
});

stopBtn.addEventListener('click', function () {
    timerStatus = false;

});

let timerStatus = false;
let hours = 00;
let minutes = 00;
let seconds = 00;

function startStopwatch() {
    //first check if timer is enabled, otherwise stop the function
    if (!timerStatus) {
        return;
    }

    //increase the timer
    seconds ++;
    console.log(seconds);
    display.innerText = `${hours}:${minutes}:${formatNumber(seconds)}`

    setTimeout(startStopwatch, 1000);
}

function formatNumber(numberInput) {
    return numberInput.toLocaleString('en-US', {minimumIntegerDigits: 2})
}