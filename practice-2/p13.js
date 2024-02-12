// total even 2,4,6 using for loop
console.log("for loop")
{   
    total=0;
    for(let i=1;i<=5;i++)
    {
        i=i+1;
        console.log(i);
        total+=i;
    }
    console.log("total="+total)
}
// total even 2,4,6 using while loop
console.log("while loop")
{
    total=0;
    let i=1;
    while(i<=5)
    {
        i=i+1;
        console.log(i);
        total+=i; 
        i++;
    }
    console.log("total="+total)
}