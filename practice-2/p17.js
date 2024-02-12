//1,4,12,32,80...n using for loop
console.log("for loop")
{
    n=prompt("enter n number")
    a=1;
    for(let i=1;i<=n;i=i*2)
    {
        console.log(a*i)
        a++;
    }
}
//1,4,12,32,80...n using while loop
console.log("while loop")
{
    n=prompt("enter n number")
    i=1;
    a=1;
    while(i<=n)
    {
        console.log(a*i)
        a++;  
        i=i*2;
    }
}
//1,4,12,32,80...n using do.while loop
console.log("do.while loop")
{
    n=prompt("enter n number")
    i=1;
    a=1;
    do{
        console.log(a*i)
        a++;  
        i=i*2; 
    } 
    while(i<=n)
}