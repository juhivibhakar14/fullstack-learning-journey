let arr = [1,22,20,4,5,10,7,8,9];

let result = arr.reduce((acc, curr) => {
    if(curr > acc){
        return curr;
    } else {
        return acc;
    }
}, arr[0]);

console.log(result);