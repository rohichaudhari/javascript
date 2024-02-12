// fibonacci sequence using while loop
document.write("while loop"+"<br>")
{
    let i=1;
    let n=10;
    
    let a=0;
    let b=1;
    {
        while(i<=10){
            k=a+b;
            a=b;
            b=k;
            document.write(a+"<br>");
            i++;
        }
    }
}
        
// fibonacci sequence using for loop    
document.write("for loop"+"<br>")
{
    let i=1;
    let n=10;
    let a=0;
    let b=1;
    {
        for(i=1;i<=10;i++)
        {
            k=a+b;
            a=b;
            b=k;
            document.write(a+"<br>");  
        }
    }
}
// fibonacci sequence using do..while loop 
document.write("do..while loop"+"<br>")
{
    let i=1;
    let n=10;
    let a=0;
    let b=1;
    {
        do{
            k=a+b;
            a=b;
            b=k;
            document.write(a+"<br>"); 
            i++;
        }
        while(i<=10)
    
    }
}