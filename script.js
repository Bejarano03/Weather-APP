let locations = localStorage.getItem("locations");
if (!locations) {
    locations = [];
}
else
{
    locations = locations.split(",")
};