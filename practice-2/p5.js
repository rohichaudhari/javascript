//enter n print -n to n using for loop
console.log("for loop")
{
    n=prompt("enter n number")
    for( let i=n; i>=-n;i--)
    {
        console.log(i)
    }
}
//enter n print -n to n using for loop
console.log("while loop")
{
    n=prompt("enter n number")
    i=n;
    while(i>=-n)
    {
        console.log(i);
        i--;
    }
}
//enter n print -n to n using do.while loop
console.log("do..while loop")
{
    n=prompt("enter n number")
    i=n;
    do{
        console.log(i);
        i--;
    }
    while(i>=-n)
}