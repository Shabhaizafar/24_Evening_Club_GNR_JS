// in C : 
// 1. Function Declaration
// void functionname();


// 2. function initialization
// void functionname(){
//     code;
// }

// int main(){
       // 3. Function Calling
//     functionname();
// }




// in JS : 
// 1. Declaration + initialization
// function functionname(){
//     code;
// }

// 2. Calling
// functionname();

//-----------------------------------------------------
// 1. without arg and without return type  

// function printHello(){
//     console.log("Hello Everyone!!");
// }

// printHello();//function calling / function invoked
//-----------------------------------------------------
// 2. with arg and without return type  

// function addition(a,b){    //a and b perameter
//     console.log(a+b);
// }

// addition(12,13);  // 12 and 13 arguments
//-----------------------------------------------------
// 3. without arg and with return type  
//    1 . use 
//    2 . store
function somthing(){
    return "This is New Data";
}

// console.log(somthing());
// var ans = somthing();
// console.log(ans);
//-----------------------------------------------------
// 4. with arg and with return type  

function result(marks){
    if(marks>=35)
        return "Pass";
    else 
        return "Fail";
}

// console.log(result(45));

// var ans2 = result(4);
// console.log(ans2);