function primeCheck(num){

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return "Not Prime";
        }
    }

    return "Prime";
}

console.log(primeCheck(4));
console.log(primeCheck(25));
console.log(primeCheck(29));