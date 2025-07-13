// // class Person{
// //     constructor(fname,lname){
// //         this.firstname = fname;
// //         this.lastname = lname;
// //     }
// // };


// // var p1 = new Person("Raj","Shah");
// // var p2 = new Person("Rajesh","Sharma");
// // console.log(p1);
// // console.log(p2);




// // class Person{
// //     constructor(fname,lname){
// //         this.firstname = fname;
// //         this.lastname = lname;
// //     }
// //     // Methods 
// //     fullName(){
// //         console.log(`My Name is ${this.firstname} ${this.lastname}.`);
// //     }
// // };


// // var p1 = new Person("Raj","Shah");
// // var p2 = new Person("Rajesh","Sharma");
// // console.log(p1);
// // console.log(p2);

// // p1.fullName();
// // p2.fullName();




// // Inheritance : 
// // single Level Inheritance : 
// // class Father{
// //     constructor(fname,lname){
// //         this.Fathername = fname;
// //         this.lastname = lname;
// //     }

// //     greet(){
// //         console.log("Hello Everyone");
// //     }
// // };

// // class Child extends Father{
// //     constructor(cname,fname,lname){
// //         super(fname,lname);
// //         this.childname = cname;
// //     }
// // };


// // var c1 = new Child("Raj","Rajesh","Shah");

// // console.log(c1);
// // c1.greet();





// // Multi Level Inheritance : 
// class Grandfather{
//     constructor(gname){
//         this.grandfathername = gname;
//     }

//     // Method
//     greet2(){
//         console.log("Nothing");
//     }
// };
// class Father extends Grandfather{
//     constructor(fname,lname,gname){
//         super(gname);
//         this.Fathername = fname;
//         this.lastname = lname;
//     }
//     greet(){
//         console.log("Hello Everyone");
//     }
// };

// class Child extends Father{
//     constructor(cname,fname,lname,gname){
//         super(fname,lname,gname);
//         this.childname = cname;
//     }
// };


// var c1 = new Child("Raj","Rajesh","Shah","Ramesh");

// console.log(c1);
// c1.greet();
// c1.greet2();












/*


### 🔹 1. Single Inheritance in JavaScript

**Question:**
Create a class `Vehicle` that contains properties `brand` and `speed`, and a method `showDetails()`.
Now, create a subclass `Bike` that inherits from `Vehicle`, and adds a new property `type` (like "sports" or "cruiser").
Finally, create an object of `Bike` and call the `showDetails()` method to display all information.

**Hint:** Topic – `class` + `extends` (Single Inheritance)

---

### 🔹 2. Multilevel Inheritance in JavaScript

**Question:**
Create a class `Person` with properties `name` and `age`. Add a method `displayInfo()`.
Now, create a class `Employee` that inherits from `Person` and adds a `salary` property.
Then, create a class `Manager` that inherits from `Employee` and adds a `department` property.
Create an object of `Manager` and display all details using the method from the base class.

**Hint:** Topic – `Multilevel Inheritance` (Chain of `extends`)


*/








