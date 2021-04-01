var apiKey = "45cd964728f300c81057241ce6ee826d";
var searchBtn = $("#search-btn");
var searchInput = $("#city")
var cityName = $("#city-name");
var currentTemp = $("#current-temp");

// This creates my date variable
var today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
var today = mm + '/' + dd + '/' + yyyy;

searchBtn.on("click", function(e){
    e.preventDefault();
    if (searchInput.val() === "") {
        alert("Please nter a city")
        return;
    }
});

function weatherData( cityName, currentTemp){
    cityName.text(cityName),
    currentTemp.text(`Temperature: ${cityTemp} F`);
}

function getWeather(cityInput) {
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${apiKey}&units=imperial`;
}