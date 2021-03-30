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