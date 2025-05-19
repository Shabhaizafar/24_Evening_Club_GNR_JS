// DOM : 
// Document Object Model

// Document : HTML Code
// Object : key+value
// Model : Structure

// -----------------------------------
`Access Fully HTML Code`
console.log(document);

`How to Access Head or Body ?`
console.log(document.head);
console.log(document.body);

`How to Access HTML Element Using JS ?`
// 1. Using Id : 
console.log(document.getElementById('id1'));

// 2. Using Class : 
console.log(document.getElementsByClassName('class1'));
console.log(document.getElementsByClassName('class1')[1]);

// 3. Using TagName : 
console.log(document.getElementsByTagName('h2'));
console.log(document.getElementsByTagName('h2')[0]);

// 4. using Query Selector :
console.log(document.querySelector('#id1'));
console.log(document.querySelector('.class1'));
console.log(document.querySelector('p.class1'));
console.log(document.querySelector('h2'));

// 5. using Query SelectorAll : 
console.log(document.querySelectorAll('h2')[1]);
