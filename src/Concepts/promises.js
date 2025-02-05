//A promise is an object representing the eventual completion (or failure) of an asynchronous operation.

const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
  
  myPromise
    .then(result => console.log(result))  // "Operation successful"
    .catch(error => console.log(error)); // "Operation failed"
  