var btns = document.querySelector('.buttons');
var op = ['/', '*', '-', "+"];

function myfu(operator, n1, n2) {
    switch (operator) {
        case "+": return +n1 + +n2;
        case "*": return +n1 * +n2;
    }
}
// 25*3
btns.onclick = function (event) {
    var display = document.querySelector('.display');
    if (event.target.tagName == "BUTTON") {
        if (event.target.innerHTML == "=") {
            var str = display.innerHTML;
            var n1 = "0";
            var n2 = "";
            var operator = "+";
            var j = 0;
            for (let i = 0; i < str.length; i++) {
                if (i == str.length - 1) {
                    n2 = str.slice(j);
                    n1 = myfu(operator, n1, n2);
                }
                if (op.includes(str[i])) {
                    n2 = str.slice(j, i);
                    n1 = myfu(operator, n1, n2);
                    operator = str[i];
                    j = i + 1;
                }
            }
            console.log(n1);
            return;
        }
        if (display.innerHTML == "0") {
            display.innerHTML = event.target.innerText;
        } else {
            if (op.includes(event.target.innerText) && op.includes(display.innerHTML[display.innerText.length - 1])) {
                console.log(display.innerHTML);
                display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1) + event.target.innerText;
            }
            else {
                display.innerHTML += event.target.innerText;
            }
        }
    }
}
