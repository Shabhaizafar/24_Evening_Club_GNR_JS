//    ✅ Is Javascript a synchronous or asynchronous programming language ?.
//      => Javascript is a synchronous programming language.
/*
console.log("Hello");
console.log("Everyone !!");
console.log("JS");

var a;
console.log(a);
a=12;
console.log(a);
*/
// ==============================================================================
// can Do synchronous to asynchronous JS ? 
// Yes. 
// How :  using setTimeout,setIntervel : 
//    ✅ SetTimeout().
//    ✅ SetTimeout() with 0 millisecond.
//    - Callback Queue.
//    ✅ SetInterval and create little project with setInterval.

// SetTimeout() : 

// setTimeout(() => {
//     //code 
// }, timeout);     // timeout  : alerm point    : milisecond

// setTimeout(() => {
//     console.log("Inner");
// }, 5000);

// console.log("Hello");  
// console.log("Everyone !!");
// setTimeout(() => {
//     console.log("Inner");
// }, 1000);
// console.log("JS");



// console.log("Hello");  
// console.log("Everyone !!");
// setTimeout(() => {
//     console.log("Inner");
// }, 0);
// console.log("JS");



// var i = 0;
// setTimeout(() => {
//     i++;
//     console.log(i);
// }, 1000);


// var i = 0;
// var id;
// id = setInterval(() => {
//     if (i==10){
//         clearInterval(id);
//     }
//     i++;
//     console.log(i);
// }, 1000);


// var i = 0;
// var id;
// console.log("Start");
// for (let i = 0; i <1000; i++) {
//     console.log("Inner");
// }
// id = setInterval(() => {
//     if (i==10){
//         clearInterval(id);
//     }
//     i++;
//     console.log(i);
// }, 1000);
// console.log("End");


// var a;
// setTimeout(() => {
//     a = 12;
// }, 0);
// console.log(a);


// setTimeout(() => {
//     console.log(a);
// }, 5000);

// var a;
// setTimeout(() => {
//     a = 12;
// }, 2000);


//    ✅ SetInterval and create little project with setInterval.
// var i = +document.querySelector('span').innerText; // "10" = 10
// var id;
// document.querySelector('button').onclick = function(){
    
//     id = setInterval(() => {
//         i--;
//         document.querySelector('span').innerText = i;
//         if(i==0){
//             document.querySelector('span').innerText = "Time Out";
//             clearInterval(id);
//         }
//     }, 1000);
// }



// ======================================================

// 
//    - Understand callbacks in general.
//    - Callbacks in asynchronous programming.
//    - Callback Hell and Pyramid of dom.

// function addition(a,b){
//     console.log(a+b);
// }

// function main(){
//     addition(12,13);
// }
// main();



// function addition(a,b){
//     console.log(a+b);
// }

// function main(callback){
//     callback(12,18);
// }
// main(addition);





// function main(userinput){
//     userinput("Enter Your Data :");
// }
// main(prompt);




// function main(timerFunction,time){
//     timerFunction(()=>{
//         console.log("Timer Function");
//     },time);
// }
// main(setTimeout,5000);



// setTimeout(() => {
//     setTimeout(() => {
//         setTimeout(() => {
//             setTimeout(() => {
//                 setTimeout(() => {
//                         //code
//                 }, timeout); 
//             }, timeout); 
//         }, timeout); 
//     }, timeout); 
// }, timeout);



// ======================================================
//    - Promises, network request.
//    - Intro to promises.
//    - Microtask Queue.
//    - Function that returns promise.
//    - Promise and settimeout.
//    - Promise.resolve and more about then method.
//    - Convert nested Callbacks to flat code using promises.

// var n = 12;
// var mypromise = new Promise(function(resolve,reject){
//     if (n>12)
//         resolve();
//     else 
//         reject();
// });


// mypromise.then(()=>{
//     console.log("Success");
// },()=>{
//     console.log("Reject");
// });


// mypromise.then(()=>{
//     console.log("Success");
// },()=>{
//     console.log("Reject");
// }).finally(()=>{
//     console.log("Promise End !!!");
// });

// mypromise.then(()=>{
//     console.log("Success");
// },()=>{
//     console.log("Reject");
// }).then(()=>{
//     console.log("Success");
// },()=>{
//     console.log("Reject");
// });


// =======================================================
//    - Fetch API.
//    - Error Handling in Fetch API.


// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//     console.log(data);
// });



// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//     console.log(data.json());
// });




// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//     data.json().then((data2)=>{
//         console.log(data2);
//     });
// });

// https://official-joke-api.appspot.com/jokes/random



// =======================================================
//    - Intro to Ajax, HTTP Request : 
//    - XHR requests.
//    - Error handling in XHR requests.
//    - XHR request Chaining.
//    - Promisifying XHR requests and chaining using then method.
//    - Consume Promises with async and Await.



// var xmr = new XMLHttpRequest();


// xmr.open("GET","https://official-joke-api.appspot.com/jokes/random");


// xmr.onload = function(data){
//     // console.log(data);
//     // console.log(data.target);
//     console.log(data.target.response);
// }

// xmr.onloadstart = function(){
//     console.log("On Load Start !!");
// }

// xmr.onloadend = function(){
//     console.log("On Load End !!");
// }

// xmr.onprogress = function(){
//     console.log("On progress !!");
// }

// xmr.send();