let n = 121;
let original = n;
let rev = 0;

while (n > 0) {
    let last = n % 10;
    rev = rev * 10 + last;
    n = Math.floor(n / 10);
}

if (original === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}