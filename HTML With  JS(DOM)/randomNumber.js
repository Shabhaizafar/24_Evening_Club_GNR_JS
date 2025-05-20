// console.log(parseInt(Math.random()*255));

// document.body.style.backgroundColor = "red";
// document.body.style.backgroundColor = "#f00";
// document.body.style.backgroundColor = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;


document.querySelector('button').onclick = function (){
    var clr = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
    document.body.style.backgroundColor = clr;

    document.querySelector('h1').innerHTML = clr;
}