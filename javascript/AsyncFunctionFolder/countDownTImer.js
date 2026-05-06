let counter = 0;

let id = setInterval(()=> {
    counter++;
    console.log(counter);
}, 1000);

setTimeout(() => {
    console.log("Time's up!");
    clearInterval(id);
}, 5000);