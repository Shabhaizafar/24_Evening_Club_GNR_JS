// What is an Object : 
// it's a Collection of Properties(Attribute) and Methods(Behavior).

// property(Attribute) : it's pair or key and value.
// Method : it's a Feature/functionality/Manner  of object.


// How to Create an Object : 

// 1. Using an Object Literal : {}
// var obj = {
//     firstname : "Raj",
//     lastname: "Shah",
//     age : 12
// };
// console.log(obj);
// console.log(typeof obj);


// 2. Using an Object Constructor :    Object()
// var obj2 = new Object();
// // dot notation
// obj2.firstname = "Rajesh";
// // bracket notation
// obj2["lastname"] = "Shah";

// console.log(obj2);
// console.log(typeof obj2);


// 3. Using Object.create() method : 
// var person  = Object.create({});
// // dot notation
// person.firstname = "Rajesh";
// // bracket notation
// person["lastname"] = "Shah";
// console.log(person);



// 4. Using Object.assign() method : 
// var child = Object.assign({});
// // dot notation
// child.firstname = "Rajesh";
// // bracket notation
// child["lastname"] = "Shah";
// console.log(child);



// 5. Create a Single Object Using Function : 
// function createObj(){
//     var user = {
//         fname : "r",
//         lname : "s"
//     };
//     return user;
// }

// var obj = createObj();
// console.log(obj);


// 5. Create a Multiple Object Using Function : 
// function createObj(f,l){
//     var user = {
//         fname : f,
//         lname : l 
//     };
//     return user;
// }

// var obj1 = createObj("Raj","S");
// console.log(obj1);

// var obj2 = createObj("Rajendra","Shah");
// console.log(obj2);

























