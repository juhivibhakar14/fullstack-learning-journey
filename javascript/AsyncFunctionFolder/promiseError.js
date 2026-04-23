let p = new Promise((resolve, reject) => {
  reject("Something went wrong ❌");
});

p.catch(err => console.log(err));