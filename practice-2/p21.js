//A,C,E,I....Z using for loop
console.log("for loop")
{
    for(i=0;i<=24;i+=2)
    {
        if(i%4==0)
        {
            console.log(String.fromCharCode(i+65))
        }
        else{
            console.log(String.fromCharCode(i+97))
        }
    }
}
//A,C,E,I....Z using while loop
console.log("while loop")
{
    i=0;
    while(i<=24)
    {
        if(i%4==0)
        {
            console.log(String.fromCharCode(i+65))
        }
        else{
            console.log(String.fromCharCode(i+97))
        }
        i+=2;
    }

}
//A,C,E,I....Z using do..while loop
console.log("do..while loop")
{
    i=0;
    do{
        if(i%4==0)
        {
            console.log(String.fromCharCode(i+65))
        }
        else{
            console.log(String.fromCharCode(i+97))
        }
        i+=2;
    }
    while(i<=24)
}