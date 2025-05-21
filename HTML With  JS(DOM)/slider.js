var btn_left = document.querySelectorAll('button')[0];
var btn_right = document.querySelectorAll('button')[1];

var counter = 0;

btn_right.onclick = function () {
    counter++;
    if (counter == 1) {
        document.querySelectorAll('div')[0].style.left = "-100%";
        document.querySelectorAll('div')[1].style.left = "0%";
        document.querySelectorAll('div')[2].style.left = "100%";
    }
    else if (counter == 2) {
        document.querySelectorAll('div')[0].style.left = "-200%";
        document.querySelectorAll('div')[1].style.left = "-100%";
        document.querySelectorAll('div')[2].style.left = "0%";
    }
    else if (counter == 3) {
        counter = 0;
        document.querySelectorAll('div')[0].style.left = "0%";
        document.querySelectorAll('div')[1].style.left = "100%";
        document.querySelectorAll('div')[2].style.left = "200%";
    }
}
btn_left.onclick = function () {
    if(counter==0)
        counter=3;
    else 
        counter--;
    
    if (counter == 1) {
        document.querySelectorAll('div')[0].style.left = "-100%";
        document.querySelectorAll('div')[1].style.left = "0%";
        document.querySelectorAll('div')[2].style.left = "100%";
    }
    else if (counter == 2) {
        document.querySelectorAll('div')[0].style.left = "-200%";
        document.querySelectorAll('div')[1].style.left = "-100%";
        document.querySelectorAll('div')[2].style.left = "0%";
    }
    else if (counter == 3) {
        counter = 0;
        document.querySelectorAll('div')[0].style.left = "0%";
        document.querySelectorAll('div')[1].style.left = "100%";
        document.querySelectorAll('div')[2].style.left = "200%";
    }
}