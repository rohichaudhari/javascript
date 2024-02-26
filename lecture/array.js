// Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);
console.log(fruits.length);

// Array push
const fruits1 = ["Banana", "Orange", "Apple"];
fruits1.push("Lemon");
console.log(fruits1);

//Array pop
const fruits2=["banana","orange","apple"];
fruits2.pop();
console.log(fruits2);

//Array Shift
const fruits3=["banana","orange","apple"];
fruits3.shift();
console.log(fruits3);

//Array unshif
const fruits4=["banana","orange","apple"];
fruits4.unshift("lemon");
console.log(fruits4);

//Array changing
const fruits5=["banana","orange","apple"];
fruits5[1]="ooo";
console.log(fruits5);

//Array merging
let a1=["1","2","3"];
let a2=["4","5","6"];
let c=a1.concat(a2);
console.log(c);

//Array splice()
const fruit6=["11","22","33","44","55","66"];
fruit6.splice(2,3);
console.log(fruit6);

//Array slice()
const a=["1","2","3","4","5","6","7"];
const b=a.slice(3,4);
console.log(b);

//Array sort
const fruits7=["hello","hy","hi","how"]
let aa=fruits7.sort();
aa.reverse();
console.log(aa);

//Numeric sort/reverse
const fruits8=["44","23","56","22"]
let aaa=fruits8.sort();
// aaa.reverse();
console.log(aaa);

//min/max element
function myArrayMin(arr) {
    return Math.max.apply(null, arr);
    return Math.min.apply(null, arr);
}
const f2 = [40, 100, 11, 5, 25, 10];
console.log(myArrayMin(f2));

// array for each
let t = "";
const fruitss = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

console.log(t);
 
function myFunction(a1, index) {
  t+= index;
}

//array map
var ary=[12,23,44,55];
var bb=ary.map(val);
console.log(bb);
function val(x){
    return x+10;
}

//array filter()
const number=[22,45,99];
 let aaaa=number.filter(valuee);
 console.log(aaaa);
 function valuee(value,index,array){
    return index>20;
 }

 //array reduce
//  const number1=[1,2,3,4];
//  const sum=number1.reduceRight(function()){
//     return
//  }

// Array every()
const number3=[4,5,6,7];
const sup=number3.every(val);
console.log(sup);
function val(val){
    return val<10;
}

// array some()
const number4=[4,5,6,7];
const sub=number3.some(val);
console.log(sub);
function val(val,index){
    return index>5;
}

//array find()
const number5=[4,5,6,7];
const subb=number3.find(val);
console.log(subb);
function val(val,index){
    return val>6;
}

//indexof()
const number6=[4,5,6,7];
const subbb=number3.findIndex(val);
console.log(subbb);
function val(val,index){
    return val>5;
}
//array includes
const number7=["1","2","3"];
const ssubbb=number7.includes("3");
console.log(ssubbb);

   