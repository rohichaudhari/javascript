//1,4,3,16,5....n using for loop
console.log("for loop")
{
    n=prompt("enter number")
    let i,k;
    for(let i=1;i<=n;i++){
        if(i%2)
        {
            k=i*i;
            console.log(k);
        }
        else{
            console.log(i);
        }
    }
}
//1,4,3,16,5....n using while loop
console.log("while loop")
{
    n=prompt("enter number")
    let i=1,k;
    while(i<=n)
    {
        if(i%2)
        {
            k=i*i;
            console.log(k);
        }
        else{
            console.log(i);
        }
        i++;
    }
}
//1,4,3,16,5....n using do..while loop
console.log("do..while loop")
{
    n=prompt("enter number")
    let i=1,k;
    do{
        if(i%2)
        {
            k=i*i;
            console.log(k);
        }
        else{
            console.log(i);
        }
        i++;
    }
    while(i<=n)
}

