//function constructor
const afunction=new Function("a","b","return a*b");
let x=afunction(11,11)
console.log(x)

//Arrow Function
let z = (a,b) => a * b;
console.log(z(12,12));

