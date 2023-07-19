var callBackReussi= function(data) {
    //alert("Meteo temp  : "  + data.main.temp);
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "La temperature est de " + data.main.temp;
    element.style.color = "#42d0ed";
}


function buttonClick() {
    var local = document.getElementById("local").value;

    var url = "https://api.openweathermap.org/data/2.5/weather?q="+local+"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

    $.get(url, callBackReussi).done(function() {
        //alert( "second success" );
      })
}
