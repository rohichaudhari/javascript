let person={ 
    firstname:"rohini", 
    lastname:"chaudhari", 
    id:"rohini@987", 
    password:12542366512 
}; 
console.log(person); 
 
// "."notation 
console.log(person.id); 
// add property 
person.address={ 
    city:"surat", 
    taluka:"vyara", 
    pin:"394633" 
} 
person.gengder="male"; 
person.hobbies=["reading","playing","chasing","talking"]; 
 delete person.id 
 console.log(person.hobbies); 
//  ["key"] 
console.log(person["lastname"]); 
console.log(person["hobbies"]["1"]); 
// console.log(person.address["pin"]);
