// console.log("DOM");
// console.log("'DOCUMENT OBJECT MODEL");

// document   : HTML Code
// object     : collecction of properties or methods
// model  


//  How to Access full HTML Code : 
// console.log(document);
// console.log(typeof document);

// var obj = {
//     fname : "Raj",
//     lname : "Shah"
// };
// console.log(obj);

// console.log(obj.fname);


// console.log(document.head);
// console.log(document.body);

// ---------------------------------------------------------
// How to Access any HTML Element using JS : 
// 1. using  ID : 
// console.log(document.getElementById('id1'));

// 2. using classname :
// console.log(document.getElementsByClassName('class1')); 
// console.log(document.getElementsByClassName('class1')[0]); 


// 3. using Tagname : 
// console.log(document.getElementsByTagName('h2'));
// console.log(document.getElementsByTagName('h2')[1]);

// 4. using quesryselector :
// console.log(document.querySelector('#id1'));
// console.log(document.querySelector('.class1'));
// console.log(document.querySelector('h2'));
// console.log(document.querySelector('h2.class1'));
// console.log(document.querySelector('h2#id1'));



// 5. using quesryselectorAll :
console.log(document.querySelectorAll('h2'));
console.log(document.querySelectorAll('h2')[2]);
