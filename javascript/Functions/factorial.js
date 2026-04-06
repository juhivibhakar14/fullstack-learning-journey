function factorial(n){
    let mul = 1;

    for(let i = 1; i <= n; i++){
        mul = mul * i;
    }

    return mul;
}

console.log(factorial(5)); 