const btn = document.querySelector('.btn');

// function sayHello() {
//     console.log("Hello");
// }

// btn.onclick = sayHello();

var i = 0;

btn.onclick = function (event){
    event.preventDefault();
    var fname = document.querySelector('.fname').value;
    var lname = document.querySelector('.lname').value;
    i++;
    localStorage.setItem(`fname${i}`,fname);
    localStorage.setItem(`lname${i}`,lname);

    // redirect
    location.href = "localStorage.html";
    // console.log(fname,lname);
}