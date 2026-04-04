let n = 121;
let original = n; // store original number
let rev = 0;

while (n > 0) {
    let last = n % 10;       
    rev = rev * 10 + last;   
    n = Math.floor(n / 10);  
}

console.log("Reversed number:", rev);

if (rev === original) {
    console.log(original + " is a palindrome");
} else {
    console.log(original + " is not a palindrome");
}