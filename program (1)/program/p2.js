// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

let x=15438;
y=x.toString();
z=y.split("");
aa=z.reverse();
bb=aa.join('');
cc=parseInt(bb);
console.log(cc);
console.log(typeof(cc));

