//Async/await is a syntax that makes working with Promises easier by using async functions
// and await for awaiting a Promise resolution.

async function fetchdata() {
    const data = await new Promise((resolve) =>
      setTimeout(() => resolve("data fetched"), 2000)
    );
    console.log(data);
  }
  fetchdata(); // "Data fetched" after 2 seconds