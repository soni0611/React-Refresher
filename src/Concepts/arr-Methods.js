const arr = [1, 2, 3, 4, 5];

// map
const mappedArr = arr.map(x => x * 2);
console.log(mappedArr); // [2, 4, 6, 8, 10]

// filter
const filteredArr = arr.filter(x => x > 2);
console.log(filteredArr); // [3, 4, 5]

// reduce
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// push
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// pop
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]

// shift
arr.shift();
console.log(arr); // [2, 3, 4, 5]

// unshift
arr.unshift(1);
console.log(arr); // [1, 2, 3, 4, 5]

// reverse
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]

// split
const str = "Hello, World!";
const strArr = str.split(", ");
console.log(strArr); // ["Hello", "World!"]

// join
const joinedStr = strArr.join(" ");
console.log(joinedStr); // "Hello World!"

// slice
const slicedArr = arr.slice(1, 4);
console.log(slicedArr); // [4, 3, 2]

// splice
arr.splice(1, 2, 6, 7);
console.log(arr); // [1, 6, 7, 4, 5]