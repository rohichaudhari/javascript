//constructor function
// const afunction=new Function("a","b","return a*b");
// let x=afunction(11,11)
// console.log(x)

const bfunction=new Function("x","y","z","return x+y*z")
let a=bfunction(12,11,13)
console.log(a);