// 1,4,3,16,5,...,n
// let n = prompt("enter n:")
// function myfun(n)
// {
//     let j;
//     for(i = 1 ; i <= n ; i++)
//     {
//         j = i * i;
//         console.log(j);
//     }   
// }
// myfun(n);

// 1,4,3,16,5,...,n
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
