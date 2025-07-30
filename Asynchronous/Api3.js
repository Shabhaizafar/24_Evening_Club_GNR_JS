document.querySelector('button').onclick = function () {
    var cityname = document.querySelector('input').value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${cityname}`).then(function (data) {
        data.json().then(function (data2) {
            var h2 = document.createElement('h2');
            var p = document.createElement('p');
            var img = document.createElement('img');
            h2.innerHTML = data2.location.name;
            p.innerHTML = "Temp : " + data2.current.temp_c;
            img.src = `https:${data2.current.condition.icon}`;
            document.body.appendChild(h2);
            document.body.appendChild(p);
            document.body.appendChild(img);
        }, function () {
            console.log("Reject");
        });
    }, function () {
        console.log("Reject");
    })

}