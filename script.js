var APIKey = "";
var city= "";
var currentDate = "";
var tempF = "";
var humityValue = "";
var windSpeed = "";
var uvIndexValue = "";
var latitude = "";
var longitude = "";
var minTempK = "";
var maxTempK = "";
var minTempF = "";
var maxTempF = "";
var dayhumitidy = "";
var currentWeatherIconCode = "";
var currentWeatherIconUrl = "";
var iconcode = "";
var iconurl = "";
var country = "";

var listOfSearchedCities = [];

// Creating variable...
var getSearchedCitiesFromLS = JSON.parse(localStorage.getItem("searched-cities"));
if (getSearchedCitiesFromLS !== null) {
    getSearchedCitiesFromLS.forEach(function(cit y) {city.toUpperCase();});
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
}