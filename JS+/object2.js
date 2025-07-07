
function Person(fname,lname,age){
    var user = {};
    user.firstname = fname;
    user.lastname = lname;
    user.age = age;
    user.biodata = function (){
        console.log(`My Name is ${user.firstname} ${user.lastname}.`);
    }

    user.is18 = function (){
        (user.age>=18) ? console.log(true) : console.log(false);
    }
    return user;
}

var p1 = Person("Raj","Shah",12);
var p2 = Person("Rajesh","Sharma",13);

console.log(p1);
console.log(p2);