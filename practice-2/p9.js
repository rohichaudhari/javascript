//print A-65 B-66...Z-90 using for loop
console.log("for loop")
{
    let i,c;
    for(let i=65;i<=90;i++)
    {
        c=i+32;
        console.log(String.fromCharCode(i)+-(i));

    }
}
//print A-65 B-66...Z-90 using while loop
console.log("while loop")
{
    let i,c;
    i=65;
    while(i<=90)
    {
        c=i+32;
        console.log(String.fromCharCode(i)+-(i));
        i++;
    }
}
//print A-65 B-66...Z-90 using do..while loop
console.log(" do..while loop")
{
    let i,c;
    i=65
    do{
        c=i+32;
        console.log(String.fromCharCode(i)+-(i));
        i++;
    }
    while(i<=90)
}