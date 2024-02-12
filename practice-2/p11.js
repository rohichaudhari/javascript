//total 1,2,3...10=55 using for loop
console.log("for loop")
{
    let i=1; 
    total=0;
    {
        while(i<=10)
        {
            document.write(i+"<br>");
            total=total+i
            i++;
        }
        document.write("total:"+total+"<br>");
    }
}
//total 1,2,3...10=55 using while loop

document.write("while loop"+"<br>")
{
    let i=1;
    total=0;
    {
        for(i=1;i<=10;i++)
        {
            document.write(i+"<br>")
            total=total+i
        }
        document.write("total:"+total+"<br>");
    }
}
//total 1,2,3...10=55 using do..while loop
// console.log("do..while")
// {
//     let i=1;
//     total=0;
//     do{
//         document.write(i+"<br>")
//             total=total+i 
//             document.write("total:"+total+"<br>");
//         }
//         while(i<=10)
// }