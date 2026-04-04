let n = 7;
let isPrime = true;

if (n <= 1) {
  console.log("Not Prime");
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("Prime");
  } else {
    console.log("Not Prime");
  }
}