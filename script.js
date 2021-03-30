let locations = localStorage.getItem("locations");
if (!locations) {
    locations = [];
}
else
{
    locations = locations.split(",")
};

$("#search").on("click", function() {
    event.preventDefault();
    event.stopPropagation();
    let city = $("#city-input").val().trim();
    if (city != '') {
        $("#city-input").html("")
        searchCity(city);
        forecast(city);
        addHistory(city);
        returnHistory()
    }
    else {
        $("#city-input").html("Input cannot be empty");
    }
});

// Recent locations searched
function addHistory(city){ 
    locations.push(city);
    localStorage.setItem("locations", locations); 
};

// Return city weather data
function searchCity(city){
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=3d16044a2eba4d271046d70fd1f2c155";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    // Return current search values on main div
    $("#cityName").attr("class", "nowrap").text(city);
    let tempT = $("#temperature").attr("class", "nowrap");
    $("#humidity").attr("class", "nowrap").text("Humidity: "+ response.main.humidity + "%.");
    $("#windSpeed").attr("class", "nowrap").text("WindSpeed: " + response.wind.speed + " m/s,");
    
    // Display current date and time
    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    // Display date with selected city
    $("#currentDate").text(dateTime);
    
    // F to C
    let cTemp = fToC(response.main.temp);
    
    // Render Temperature
    tempT.text("Temperature: "+ cTemp);

    // Request for ajax call for UV response
    let cityLat = response.coord.lat;
    let cityLon = response.coord.lon;
    let uvURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + "3d16044a2eba4d271046d70fd1f2c155" + "&lat=" + cityLat + "&lon=" + cityLon + "&units=imperial";
    $.ajax({
        url: uvURL,
        method: "GET"
    }).then(function (response) {
        
        // Render UV
        let uv = response.value;
        $("#uvIndex").empty();
        $("#uvIndex").append($("<div id=\"uvColor\">").text("UV Index: " + uv)).attr("class", "nowrap");
        // Color code UV conditions
        if(uv <= 3){
            $("#uvColor").attr("style", "background-color:green ; width:65%");
        }
        else if( uv <= 7){
            $("#uvColor").attr("style", "background-color:orange ; width:65%");
        }
        else{
            $("#uvColor").attr("style", "background-color:red ; width:65%");
        };
        
    })
})
};

// F to C
function fToC(fahrenheit) {
    const fTemp = Math.round(fahrenheit);
    const fToCel = Math.round((fTemp - 32) * 5 / 9);
    const temp = `${fTemp}\xB0F : ${fToCel}\xB0C.`;
    return temp;   
};