//0.5,1,2.5,5...n  using for loop
console.log("for loop")
{
    n=prompt("enter n number")
    let j=0.5
    console.log(j)
    {
        for(let i=0.5;i<=n;i++)
        {
            j+=i*1;
            console.log(j)
        }
    }
}
//0.5,1,2.5,5...n  using while loop
console.log("while loop")
{
    n=prompt("enter n number")
    let j=0.5;
    let i=0.5;
    console.log(j)
    while(i<=n)
    {
        j+=i*1;
        console.log(j)
        i++;
    }  
}
//0.5,1,2.5,5...n  using do..while loop
console.log("do..while loop")
{
    n=prompt("enter n number")
    let j=0.5;
    let i=0.5;
    console.log(j)
    do{
        j+=i*1;
        console.log(j)
        i++;
    }
    while(i<=n)
}
