// Function Expression  : 
//-----------------------------------------------------
// 1. without arg and without return type  

var printHello = function (){
    console.log("Hello Everyone!!");
}

printHello();//function calling / function invoked
//-----------------------------------------------------
// 2. with arg and without return type  

var addition = function (a,b){    //a and b perameter
    console.log(a+b);
}

addition(12,13);  // 12 and 13 arguments
//-----------------------------------------------------
// 3. without arg and with return type  
//    1 . use 
//    2 . store
var somthing = function (){
    return "This is New Data";
}

console.log(somthing());
// var ans = somthing();
// console.log(ans);
//-----------------------------------------------------
// 4. with arg and with return type  

var result = function (marks){
    if(marks>=35)
        return "Pass";
    else 
        return "Fail";
}

console.log(result(45));

// var ans2 = result(4);
// console.log(ans2);