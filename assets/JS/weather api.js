



// Get Weather API information //
var apiKey = "c3adaa7e48d20b2f65d6246f1225cb77"
var getWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + "units=imperial" + this.apiKey;

function getWeather (city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + "units=imperial" + this.apiKey);

    then((response) => response.json())
    then((data) => displaygetWeather(data));

displaygetWeather: function(data) {
    const { name } = data;
    const { icon, description } = date.getWeather[0];
    const { temp, humidity } = data.main
    const {speed} = data.wind
    const { lat, long } = data.coord
    console.log(name, icon, temp, humidity, speed, lat, long)
}
// To display weather to site
document.querySelector(".city").innertext = "Weather in " + name;
}


  // After HTML is loaded, the page is ready to run
$(document).ready(function(){

    // City Input and search history
      

}
