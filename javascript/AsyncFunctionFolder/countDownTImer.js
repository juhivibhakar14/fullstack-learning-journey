console.log("Start");
let counter = 0;
setInterval(()=> {
    counter++;
    console.log(counter);
}, 1000);
setTimeout(() => {
    console.log("Time's up!");
    clearInterval(counter);
}, 5000);
console.log("End");