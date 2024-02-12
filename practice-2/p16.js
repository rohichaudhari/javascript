//1,2,4,8,16....n using for loop
console.log("for loop")
{
    n=prompt("enter n number")
    for(let i=1;i<=n;i=i*2)   
    {
        console.log(i)
    } 
}
//1,2,4,8,16....n using while loop
console.log("while loop")
{
    n=prompt("enter n number")
    let i=1
    while(i<=n)
    {
        console.log(i)
        i=i*2; 
    }
}
//1,2,4,8,16....n using do.while loop
console.log("do.while loop")
{
    n=prompt("enter n number")
    let i=1;
    do{
        console.log(i)
        i=i*2; 
    } 
    while(i<=n)
}