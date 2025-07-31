document.querySelector('button').onclick = function () {
    document.querySelector('.div1').innerHTML = "";
    document.querySelector('.div2').innerHTML = "";
    fetch("https://catfact.ninja/fact").then((data) => {
        data.json().then((data2) => {
            // console.log(data2);
            if(data2.length>100){
                document.querySelector('.div1').innerHTML = data2.fact;
            }else if(data2.length<50){
                document.querySelector('button').disabled = true;
                setTimeout(() => {
                    document.querySelector('button').disabled = false;
                }, 5000);
            }else{
                document.querySelector('.div2').innerHTML = data2.fact;
            }
            
            console.log(data2.length);
        }, () => {
            console.log("Reject");
        });
    }, () => {
        console.log("Reject");
    });
}