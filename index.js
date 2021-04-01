var apiKey = "45cd964728f300c81057241ce6ee826d";
var searchBtn = $("#search-btn");
var searchInput = $("#city")
var cityName = $("#city-name");
var currentTemp = $("#current-temp");

searchBtn.on("click", function(e){
    e.preventDefault();
    if (searchInput.val() === "") {
        alert("Please nter a city")
        return;
    } console.log("clicked button")
    getWeather(searchInput.val());
});


function displayCurrentWeather(){
    var cardDiv = $("<div class='card-body'>")
    var currenTemp = $("<p>")

    cardDiv.append(currentTemp)
}

function getWeather(cityInput) {
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${apiKey}&units=imperial`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }). then(function(weatherInfo){
        var cityObject = {
            cityTemp: weatherInfo.main.temp
        }. then(weatherData(cityObject.cityTemp))
    })
}

getWeather();

