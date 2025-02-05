//A polyfill is used to provide functionality in JavaScript that is not natively available in all browsers.

if (!Array.prototype.includes) {
    Array.prototype.includes = function(value) {
      return this.indexOf(value) !== -1;
    };
  }
  
  const arr = [1, 2, 3];
  console.log(arr.includes(2)); // true