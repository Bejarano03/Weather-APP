var apiKey = "45cd964728f300c81057241ce6ee826d";
var searchBtn = $("#search-btn");
var searchInput = $("#city")


searchBtn.on("click", function(e){
    e.preventDefault();
    var cityName = $("input").val().toUpperCase().trim();
    searchInput.val("");
    getWeather(cityName); 
});

$(document).on("click", function() {
    var cityName = $(this).text();
    getWeather(cityName);
});


function displayCurrentWeather(){
    var cardDiv = $("<div class='container border bg-light'>");
    
    var temperature = $("<p>").text("Temperature: " + temp+ " ºF");
    cardDiv.append(temperature);
    $("#current-weather").append(cardDiv)
}

function getWeather(cityName) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + 
    cityName + "&appid=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var result = response;
        console.log(result);
        var tempK = result.main.temp;
        temp = ((tempK - 273.15) * 1.80 + 32).toFixed(1);

        displayCurrentWeather()
})
};