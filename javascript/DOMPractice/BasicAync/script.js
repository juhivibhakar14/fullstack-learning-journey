let loadBtn = document.getElementById('loadBtn');
let loadingText = document.getElementById('loadingText');

let fetchBtn = document.getElementById('fetchBtn');
let userText = document.getElementById('userText');

let timerText = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');


// Loading Simulation
loadBtn.addEventListener('click', () => {

    loadingText.textContent = 'Loading...';

    setTimeout(() => {

        loadingText.textContent = 'Data Loaded!';

    }, 2000);

});


// Fake API Delay
fetchBtn.addEventListener('click', () => {

    userText.textContent = 'Fetching user...';

    setTimeout(() => {

        userText.textContent = 'User: John Doe';

    }, 3000);

});


// Countdown Timer
startBtn.addEventListener('click', () => {

    let count = 10;

    timerText.textContent = count;

    let intervalId = setInterval(() => {

        count--;

        timerText.textContent = count;

        if (count === 0) {

            clearInterval(intervalId);
startBtn.disabled = true;
            timerText.textContent = "Time's Up!";
startBtn.disabled = false;
        }

    }, 1000);

});