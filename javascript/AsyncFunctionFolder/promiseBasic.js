let promise = new Promise((resolve, reject) => {
  let success = true;

  if(success){
    console.log("Promise resolved");
    resolve("Data received successfully");
  } else {
    console.log("Promise rejected");
    reject("Data received failed");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });