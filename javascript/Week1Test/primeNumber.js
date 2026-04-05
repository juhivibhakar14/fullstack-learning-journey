let n = 9;
let isPrime = true;

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime && n > 1) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}