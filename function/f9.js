// Enter Students marks wheather pass or not
let marks = prompt("enter n:")
function result(marks)
{
    if (marks <= 30)
    {
                console.log("fail\n");
            
            }
            else if ( marks >30 && marks <= 100)
           { 
            console.log(" pass");
            }
            else
             { 
                console.log(" wrong marks");
            }
}
result(marks);
