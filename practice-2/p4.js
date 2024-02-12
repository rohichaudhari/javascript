//enter n print n to 1 using for loop
console.log("for loop")
{
    n=prompt("enter n number")
    for( let i=n; i>=1;i--)
    {
        console.log(i)
    }
}
//enter n print n to 1 using for loop
console.log("while loop")
{
    n=prompt("enter n number")
    i=n;
    while(i>=1)
    {
        console.log(i);
        i--;
    }
}
//enter n print n to 1 using do.while loop
console.log("do..while loop")
{
    n=prompt("enter n number")
    i=n;
    do{
        console.log(i);
        i--;
    }
    while(i>=1)
}