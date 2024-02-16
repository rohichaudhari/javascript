// 1,4,12,32,80,...,n
(function() {
    var j , i,a=1;
    var n = prompt("enter n:")
    for(i = 1 ; i<n ; i=i*2)
    {
       console.log(a*i);
       a++;
    }
    })();
    