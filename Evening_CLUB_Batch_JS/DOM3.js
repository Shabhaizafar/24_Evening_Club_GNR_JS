
var btn = document.querySelector('button');
// event : 
btn.onclick = function (){
    // console.log(document.querySelector('h1'));
    // console.log(document.querySelector('h1').innerHTML);

    // document.querySelector('h1').innerHTML = "Changed Data";
    // document.querySelector('h1').style.color = "rgb(255,0,0)";
    // console.log(`rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`);
    document.querySelector('h1').style.color = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;

}

