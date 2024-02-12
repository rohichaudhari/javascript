//1,4,9,16....n using for loop
console.log("for loop")
{
    n=prompt("enter number")
    for(let i=1;i<=n;i++)
    {
        square=i*i;
        console.log(square)
    }
}
//1,4,9,16....n using while loop
console.log("while loop")
{
    n=prompt("enter number")
    i=1;
    while(i<=n)
    {
        square=i*i;
        console.log(square)
        i++;
    } 
}
//1,4,9,16....n using do..while loop
console.log("do..while loop")
{
    n=prompt("enter number")
    i=1;
    do{
        square=i*i;
        console.log(square)
        i++;
    }
    while(i<=n)

}