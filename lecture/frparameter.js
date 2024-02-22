// Function Rest Parameters:-
// function sum(...args) {
//     let sum = 0;
// for (let arg of args) 
//                 sum += arg;
// return sum;
// }
// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

// function mul(...inputs)
// {
//     console.log(...inputs)
//     let total=1;
//     for(let input of inputs){
//         total*=input;
//     }
//     console.log(total);
//     console.log(arguments.length);
// }
// mul(1,2,5);

function fun(a,b,...c)
{
console.log(`${a} *${b}`);
console.log(arguments.length);
console.log(c);
console.log(c[1]);
console.log(c.length);
console.log(c.indexOf('rohini'))
}
fun(1,2,'payal','divya','mallika');