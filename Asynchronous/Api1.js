// API   : https://restcountries.com/v3.1/name/{name}  

fetch("https://restcountries.com/v3.1/name/Bharat").then(function(data){
    data.json().then(function(data2){
        console.log(data2);
    },function(){});
},function(){
    console.log("Failed !!");
});