//A,C,E,G,I...Z using for loop
console.log("for loop")
{

    for(let ch=65;ch<=90;ch++)
    {
        if(ch==65)
        {
            console.log(String.fromCharCode(ch))
        }
        else{
            ch=ch+1;
            console.log(String.fromCharCode(ch)) 
        }
    }
}
//A,C,E,G,I...Z using while loop
console.log("while loop")
{
    let ch=65;
    while(ch<=90)
    {
        if(ch==65)
        {
            console.log(String.fromCharCode(ch))
        }
        else{
            ch=ch+1;
            console.log(String.fromCharCode(ch)) 
        }  
        ch++; 
    }
}
//A,C,E,G,I...Z using do..while loop
console.log("do..while loop")
{
    let ch=65;
    do{
        if(ch==65)
        {
            console.log(String.fromCharCode(ch))
        }
        else{
            ch=ch+1;
            console.log(String.fromCharCode(ch)) 
        }  
        ch++; 
    }
    while(ch<=90)
}