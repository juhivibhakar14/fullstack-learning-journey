function processNumber(num, callback) {
    callback(num);
}
processNumber(10,number=>number%2===0 ? console.log("Even") : console.log("Odd"));