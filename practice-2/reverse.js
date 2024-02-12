{
    let i , n=654321 , reverse = 0;
    while(n != 0) 
    {
        i = n % 10;
        reverse = reverse * 10 + i ;
        n=parseInt(n/10);
    }
    console.log(reverse);
}