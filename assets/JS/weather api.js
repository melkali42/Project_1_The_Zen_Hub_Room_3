// Date Format //
function formatDate(date){
    var date = new date();
    console.log(date);
    var month = date.getMonth()+1;
    var day = date.getDate();

    var dayOutput = date.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;
    return dayOutput
}


// After HTML is loaded, the page is ready to run
$(document).ready(function(){

// City Input and search history


}

// Get Weather API information //
var apiKey = "efef11abaac2a36c513e8fee876fb288"

function getWeather (city) {

    // URL needed to query the OpenWeather API database //
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
}