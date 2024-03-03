// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development' 
 
Longword( 'Web  Tutoriallllll development'); 
function Longword(str){ 
    let words = str.split(' '); 
    // console.log(words.length);
    console.log(words); 
    let maxLength = 0; 
    let longword = ""; 
   
    for (let i = 0; i < words.length; i++) 
     { 
      if (words[i].length > maxLength)
       { 
        maxLength = words[i].length; 
        longword = words[i]; 
      } 
    } 
    console.log(longword); 
}