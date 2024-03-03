// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'
function uppercase(str) { 
    var str1 = str.split(' '); 
    console.log(str1); 
    var a = []; 
    for (var x = 0; x < str1.length; x++) { 
      a.push(str1[x].charAt(0).toUpperCase() + str1[x].slice(1)); 
    } 
    return a.join(' '); 
  } 
  console.log(uppercase("the quick brown fox"));