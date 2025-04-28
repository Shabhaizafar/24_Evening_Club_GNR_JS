
    var data = window.navigator.geolocation;
    data.getCurrentPosition(function (mylocation){
        console.log("latitude : ",mylocation.coords.latitude);
        console.log("longitude : ",mylocation.coords.longitude);
    });
