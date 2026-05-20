let loadBtn = document.getElementById('loadBtn');
let loadingText = document.getElementById('loadingText');

let fetchBtn = document.getElementById('fetchBtn');
let userText = document.getElementById('userText');

let timerText = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');


// ----------------------
// Loading Simulation
// ----------------------

loadBtn.addEventListener('click', async () => {

    loadBtn.disabled = true;

    loadingText.textContent = "Loading...";

    // Promise
    let promise = new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data Loaded!");

        }, 2000);

    });

    // await
    let result = await promise;

    loadingText.textContent = result;

    loadBtn.disabled = false;

});


// ----------------------
// Fake API Delay
// ----------------------

fetchBtn.addEventListener('click', async () => {

    fetchBtn.disabled = true;

    userText.textContent = "Fetching user...";

    // fake api promise
    let fakeApi = new Promise((resolve) => {

        setTimeout(() => {

            let users = [
                "John Doe",
                "Jane Smith",
                "Alex Brown",
                "Emma Wilson"
            ];

            let randomUser =
                users[Math.floor(Math.random() * users.length)];

            resolve(randomUser);

        }, 3000);

    });

    // await response
    let user = await fakeApi;

    userText.textContent = `User: ${user}`;

    fetchBtn.disabled = false;

});


// ----------------------
// Countdown Timer
// ----------------------

startBtn.addEventListener('click', () => {

    startBtn.disabled = true;

    let count = 10;

    timerText.textContent = count;

    let intervalId = setInterval(() => {

        count--;

        timerText.textContent = count;

        if (count === 0) {

            clearInterval(intervalId);

            timerText.textContent = "Time's Up!";

            startBtn.disabled = false;

        }

    }, 1000);

});