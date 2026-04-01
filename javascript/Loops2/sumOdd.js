let sum = 0;
let n = 20;

for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    sum = sum + i;
  }
}

console.log(sum);