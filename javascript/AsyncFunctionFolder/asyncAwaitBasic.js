async function basic(){
  console.log("This will be printed first");
  let res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello, this will be printed after 2 seconds");
      resolve("Data received successfully");
    }, 2000);
  });

  console.log(res);
}

basic();