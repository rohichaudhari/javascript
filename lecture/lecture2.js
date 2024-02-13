//hosting
start (10,7);

    function start(a,b)
    {
        console.log(a*b);
    }

    //basic function
    function add(a,b)
    {
        return a+b;
    }
    console.log(add(10,7))
    let z=add(10,15);
    console.log(z);

    //IIFE 

    let x=(function on(a,b)
    {
        return(a*b)
    })(10,15);
    console.log(x);

    //anonmous function/function as expression
    let product=function(a,b)
    {
        return a+b;
    };
    console.log(product(11,11))
        
