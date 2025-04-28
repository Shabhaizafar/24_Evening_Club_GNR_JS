// Array : 
// it's a Collection of Data with same datatype or different Datatype.



// How To Create an Array : 
/*
var/let/const arrayname = [values...];
*/

//Empty Array : 
// var arr = [];
// console.log("Empty Array : ",arr);

// var sameDatatype1 = [11,12,13];
// var sameDatatype2 = ["Zafar","zfr","z"];
// var sameDatatype3 = [true,false];
// var sameDatatype4 = [11n,12n,13n];
// var sameDatatype5 = [undefined,undefined,undefined];
// var sameDatatype6 = [null,null];

// console.log("SameDatatype : ",sameDatatype1);
// console.log("SameDatatype : ",sameDatatype2);
// console.log("SameDatatype : ",sameDatatype3);
// console.log("SameDatatype : ",sameDatatype4);
// console.log("SameDatatype : ",sameDatatype5);
// console.log("SameDatatype : ",sameDatatype6);


// var differentDatatype = [12,"Zafar",true,12n,null,undefined,["Z"],{},prompt];
// console.log("differentDatatype : ",differentDatatype);


/////////////////////////////////////////////////////////
// var arr = [11,12,13,14,15];
// How to Print an Array : 
// console.log(arr);

//--------------------------------------------------------------------------
// Property : 
// 1. length
// console.log(arr.length);
//--------------------------------------------------------------------------
// Basic Methods :
// 1. push :  ADD VALUES    : last index
//  return : new length 

// arr.push(100);
// var ans1 =  arr.push(100,111,222);

// console.log(arr);
// console.log(ans1);
//--------------------------------------------------------------------------
// 2. unshift : ADD VALUES : starting index
//  return : new length 
// var ans2 = arr.unshift(100);
// arr.unshift(100,111,456);
// console.log(arr);
// console.log(ans2);

//--------------------------------------------------------------------------
// 3. pop :   REMOVE VALUE  : last index 
// return : deleted value
// var ans3 = arr.pop();
// console.log(arr);
// console.log(ans3);

//--------------------------------------------------------------------------
// 4. shift :  REMOVE VALUE : starting index 
// return : deleted value
// var ans4 = arr.shift();
// console.log(arr);
// console.log(ans4);
//--------------------------------------------------------------------------

// var arr = [11,14,15,123,13,4,5,2,1];
// console.log(arr);

// Extra Methods : 
// 😀  Easy 😃

// 1. reverse : 
// console.log("Very Easy : 🥱🤭",arr.reverse());

// 2. fill : 
// console.log(arr.fill("😁"));


// 3. slice : 
// console.log(" ✂ 🔪:  ",arr.slice());
// console.log(" ✂ 🔪:  ",arr.slice(2));
// console.log(" ✂ 🔪:  ",arr.slice(2,5));



/*
Create an array of 5 numbers and print it.

Add two elements at the end of an array using .push() and print the new array.

Add two elements at the beginning of an array using .unshift() and print the updated array.

Remove the last element of an array using .pop() and print the deleted value and updated array.

Remove the first element of an array using .shift() and print the deleted value and updated array.

Create an array and reverse it using .reverse(). Print before and after.

Create an array of strings and fill the array with "Done" using .fill(), then print it.

Slice the array from the 2nd index to 5th index and print the sliced array.

Create an array with mixed datatypes (number, string, boolean, null) and print each element separately.

Create an empty array, then add 5 elements dynamically using .push() (one by one) and print the final array.


*/