document.querySelector('button').onclick = function () {
    var countryname =  document.querySelector('input').value;
    fetch(`https://restcountries.com/v3.1/name/${countryname}`).then(function (data) {
        data.json().then(function (data2) {
            console.log(data2[0].flags.svg);
            console.log(data2[0].name.common);
            console.log(data2[0].languages);
        }, function () {
            console.log("Not Found !!");
        });
    }, function () {
        console.log("Not Found !!");
    });
}