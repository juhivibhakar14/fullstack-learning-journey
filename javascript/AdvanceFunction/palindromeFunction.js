function palindromeCheck(n){
    let original = n;
    let reverse = 0;

    while(n > 0){
        let last = n % 10;
        reverse = reverse * 10 + last;
        n = Math.floor(n / 10);
    }

    if(original === reverse){
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

console.log(palindromeCheck(121));
console.log(palindromeCheck(123)); 