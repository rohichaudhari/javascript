// 1,2,4,8,16,...,n
let n = prompt("enter n:")
function myfun(n)
{
    let j,k,i;
    for(i = 1 ; i <= n ; i=i*2)
    {
       console.log(i);
    }   
}
myfun(n);