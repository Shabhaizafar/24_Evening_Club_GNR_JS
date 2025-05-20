console.log(document.querySelector('img'));


// how to Access Attributes : 
console.log(document.querySelector('img').attributes);
console.log(document.querySelector('img').attributes[0]);
console.log(document.querySelector('img').attributes[0].value);


// How to Change Attribute Value : 


document.querySelector('button').onclick = function (){
    document.querySelector('img').attributes[0].value = "https://marketplace.canva.com/EAFd04X_x50/1/0/450w/canva-black-aesthetic-cat-phone-wallpaper-QVusphwEQnk.jpg";
};