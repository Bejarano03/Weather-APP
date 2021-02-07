var APIKey = "45cd964728f300c81057241ce6ee826d";


var listOfSearchedCities = [];

// Creating variable...
var getSearchedCitiesFromLS = JSON.parse(localStorage.getItem("searched-cities"));
if (getSearchedCitiesFromLS !== null) {
    getSearchedCitiesFromLS.forEach(function(city) {city.toUpperCase();});
    listOfSearchedCities = getSearchedCitiesFromLS;
}

$(document).ready(function() {
    displayCities(listOfSearchedCities);
    if (getSearchedCitiesFromLS !== null) {
        var lastCity = listOfSearchedCities[0];
        searchCity(lastCity);
    }
}); 

$("#search-btn").on("click", function() {
    event.preventDefault();
    clearDisplayedWeatherInfo()
    resetGlobalVariables()
    var cityName = $("input").val().toUpperCase().trim();
    $("#search-input").val("");
    searchCity(cityName);

    if (cityName !== ""&& listOfSearchedCities[0] !== cityName) {
        listOfSearchedCities.unshift(cityName);
        localStorage.setItem("searched-cities", JSON.stringify(listOfSearchedCities));
     if (listOfSearchedCities.length ===1) 
    
    
});

function getWeather (cityName) {
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(response) {
        console.log(this);
    }
}