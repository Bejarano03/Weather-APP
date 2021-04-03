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
    var cardDiv = $("<div class='card-body'>")
    var currenTemp = $("<p>")

    cardDiv.append(currentTemp)
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
})
};