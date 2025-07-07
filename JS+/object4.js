var AllMethods = {
    biodata : function (){
        console.log(`My Name is ${this.firstname} ${this.lastname}.`);
    },
    is18 : function (){
        (this.age>=18) ? console.log(true) : console.log(false);
    },
    greet : function (){
        console.log("wert");
    }
}

function Person(fname,lname,age){
    var user = Object.create(AllMethods);
    user.firstname = fname;
    user.lastname = lname;
    user.age = age;
    return user;
}

var p1 = Person("Raj","Shah",12);
var p2 = Person("Rajesh","Sharma",13);

console.log(p1);
p1.biodata();
p1.is18();
p1.greet();
console.log(p2);
p2.biodata();
p2.is18();
p2.greet();