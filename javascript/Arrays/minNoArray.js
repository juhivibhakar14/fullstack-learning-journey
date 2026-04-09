const num = [1, 2, 3, 4, 5];
let min = num[0];

for(let i = 0; i < num.length; i++){
    if(num[i] < min){
        min = num[i];
    }
}

console.log(min);