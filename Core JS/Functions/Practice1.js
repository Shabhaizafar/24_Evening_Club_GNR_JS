// 1. **With Argument and With Return Type**
//    **Question:**
//    Write a function that takes a product price and discount percentage as arguments and returns the final price after applying the discount.

var product_price = 500;
var discount = 0.10;


function calculate(p_price,disc){
    return (p_price - p_price*disc);
}
var final_bill = calculate(product_price,discount);
// console.log(final_bill);



// -----------------------------------------------------------------

// 2. **Without Argument and With Return Type**
//    **Question:**
//    Write a function that returns the current year using JavaScript.

var date = new Date();   //Date() Constructor 

// console.log(date.getFullYear());

function getYearToday(){
    return date.getFullYear();
}

// console.log("Current Year : ",getYearToday());
// -----------------------------------------------------------------

// 3. **With Argument and Without Return Type**
//    **Question:**
//    Write a function that takes a username as an argument and logs a personalized welcome message to the console.

function welcomeUser(username){
    console.log(`Hello ${username}, Welcome to the Zoo !!`);
}
welcomeUser("Prachi");
// -----------------------------------------------------------------

// 4. **Without Argument and Without Return Type**
//    **Question:**
//    Write a function that shows an alert saying "Time to take a break!" when called.


function takeRest(){
    alert("Time to take a break!");
}

// takeRest();