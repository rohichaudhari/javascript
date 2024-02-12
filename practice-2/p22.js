//1,2,3,4,5 total=15 using for loop
console.log("for loop")
{
    total=0;
    for(let i=1;i<=5;i++)
    {
        console.log(i)
        total=total+i;
    }
    console.log("total="+total)
}
//1,2,3,4,5 total=15 using while loop
console.log("while loop")
{
    let i=1;
    total=0;
    while(i<=5)
    {
        console.log(i)
        total=total+i;
        i++; 
    }
    console.log("total="+total)
}
//1,2,3,4,5 total=15 using do..while loop
console.log("do..while loop")
{
    let i=1;
    total=0;
    do{
        console.log(i)
        total=total+i;
        i++;
    } 
    while(i<=5)
}
