// 1,4,9,16,.....,n
//basic function
let n = prompt("enter n:")
function myfun(n)
{
    let j;
    for(i = 1 ; i <= n ; i++)
    {
        j = i * i;
        console.log(j);
    }   
}
myfun(n);
 //anonmous function/function as expression
(function() {
    var j , i;
    var n = prompt("enter n:")
    for(i = 1 ; i < n ; i++)
    {
        if(i % 2 == 0)
        {
            j = i * i;
            console.log(j);
        }
        else
        {
            console.log(i);
        }
    }
    })();
    

   