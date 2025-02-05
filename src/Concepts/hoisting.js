//Hoisting
//Hoisting is JavaScript's default behavior of moving declarations to the top.

console.log(a);
var a=10; //undefined

foo(); //Hello
function foo(){
    console.log("Hello")
}

bar(); // TypeError: bar is not a function
var bar = function() {
  console.log("World");
};
// let and const remain in temporal dead zone until intialized
console.log(b);
let b=10; //ReferenceError: Cannot access 'b' before initialization

console.log(c);
let c=10; //ReferenceError: Cannot access 'c' before initialization