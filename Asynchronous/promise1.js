var a = 1;
var mypromise = new Promise(function (success,reject){
    // if(a>10){
    //     success();
    // }else{
        // reject();
    // }
});



mypromise.then(function(){
    console.log("Succesfully Execute !!!");
},function(){
    console.log("Failed !!!");
});


// Bank Transaction
// Write a function transferMoney(amount) that returns a Promise. If amount < balance, resolve it. Otherwise, reject with "Insufficient funds".