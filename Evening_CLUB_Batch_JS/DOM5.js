var btn = document.querySelector('button');

btn.onclick = function (){
    var firstname = document.querySelector('#fname').value;
    var lastname = document.querySelector('#lname').value;
    // console.log(firstname,lastname);
    localStorage.setItem("firstname",firstname);
    localStorage.setItem("lastname",lastname);

    location.href = "thanks.html";
}