// setTimeout example
setTimeout(() => {
    console.log("This runs after 2 seconds");
  }, 2000);

  // setInterval example
  let count=0;
  const intervalid=setInterval(()=>{
      count++
      console.log(count)
      if (count==5) clearInterval(intervalid)
  },1000)