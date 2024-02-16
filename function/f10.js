//Enter one value find its divisible by 5 and 3 or 
n=prompt("enter n");
(function(n) {
    // var n;
    
    {
        if(n % 5 == 0 && n%3==0)
        {
            
            console.log("is a divisible by 5 or 3:",n);
        }
        else
        {
            console.log("is a not divisible by 5 or 3:",n);
        }
    }
    })(n);