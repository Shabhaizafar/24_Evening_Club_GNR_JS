var pwd  = "";
var counter = 0;
var str = "";
document.querySelector('input').onkeypress = function (event){
    counter++;
    pwd+=event.key;
    str = "";
    for (let i = 0; i < counter; i++) {
        str += "●";
    }
}
document.querySelector('input').onkeyup = function (){
    document.querySelector('input').value = str;
}

document.querySelector('aside').onclick = function (event){
    if(event.target.innerText == "visibility_off"){
        event.target.style.display  = "none";
        document.querySelector('.vis').style.display  = "block";
        document.querySelector('input').value = pwd;
    }
    else if(event.target.innerText == "visibility"){
        event.target.style.display  = "none";
        document.querySelector('.vis2').style.display  = "block";
        document.querySelector('input').value = str;
    }
}


// ●