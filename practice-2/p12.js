// total odd 1,3,5 using for loop
console.log("for loop")
{   
    total=0;
    for(let i=0;i<=5;i++)
    {
        i=i+1;
        console.log(i);
        total+=i;
    }
    console.log("total="+total)
}
// total odd 1,3,5 using while loop
console.log("while loop")
{
    total=0;
    let i=0;
    while(i<=5)
    {
        i=i+1;
        console.log(i);
        total+=i; 
        i++;
    }
    console.log("total="+total)
}