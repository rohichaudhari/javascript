// 5. Write a JavaScript function that checks whether a number is perfect.
var num=prompt("enter number");
var sum=0;
for(var i=1;i<=num/2;i++)
{
    if(num%i==0)
    {
        sum=sum+i;
    }
   else if (num <= 0)
    { 
        console.log(num+"number is not perfect"); 
    } 
    
}
if(sum==num){
    console.log(num+"number is perfect");
}
else{
    console.log(num+"number not is perfect");

}''