// Closures
//Closure means that an inner function always has access to the variable and parameters of its outer function, 
// even after the outer function has returned

function outer(){
    let count=0
    return function inner(){
        count++;
        console.log(count)
    }
 }
 const counter=outer();
 counter(); //1
 counter(); //2