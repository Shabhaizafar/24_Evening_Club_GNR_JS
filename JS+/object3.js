var AllMethods = {
    biodata : function (){
        console.log(`My Name is ${this.firstname} ${this.lastname}.`);
    },
    is18 : function (){
        (this.age>=18) ? console.log(true) : console.log(false);
    }
}

function Person(fname,lname,age){
    var user = {};
    user.firstname = fname;
    user.lastname = lname;
    user.age = age;
    user.biodata = AllMethods.biodata;
    user.is18 = AllMethods.is18;
    return user;
}

var p1 = Person("Raj","Shah",12);
var p2 = Person("Rajesh","Sharma",13);

console.log(p1);
p1.biodata();
p1.is18();
console.log(p2);
p2.biodata();
p2.is18();