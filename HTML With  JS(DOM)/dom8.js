const btn = document.querySelector('.btn');

// function sayHello() {
//     console.log("Hello");
// }

// btn.onclick = sayHello();



btn.onclick = function (event){
    event.preventDefault();
    var fname = document.querySelector('.fname').value;
    var lname = document.querySelector('.lname').value;
    localStorage.setItem('i',+localStorage.getItem('i')+1);
    localStorage.setItem(`fname${localStorage.getItem('i')}`,fname);
    localStorage.setItem(`lname${localStorage.getItem('i')}`,lname);

    // redirect
    // location.href = "localStorage.html";
    location.href = "thanks.html";

    // console.log(fname,lname);
}