
// Favorites button add to favorites list
var addFav = document.getElementById("addToFavorites");

function addFavorite() {
    var favoritesList = JSON.parse(localStorage.getItem("allFavorites"));
    if(favoritesList == null) favoritesList = [];
    var cityName = document.getElementById("city").value;

localStorage.setItem(cityName,JSON.stringify(cityName));
favoritesList.push(cityName);
localStorage.setItem("allFavorites", JSON.stringify(favoritesList));
console.log(favoritesList);
}

addFav.addEventListener("click", function(){
    console.log("Done!");
  });

var searchBar = document.querySelector(".search-bar");
var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");
var form = document.getElementById("form");
var apiKey = "b2a3d794234a2e76abf165d172c1074d";
// establish the API URL- save in a variable
// make another function get forecast weather info

function getCurrentWeatherInfo(cityName) {
  var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`; // run fetch on this

  fetch(currentWeatherUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

    
    function displayCurrentWeather(data){
    const { name } = data; 
    const { icon, description } = data.currentWeatherUrl[0];
    const { temp, humidity } = data.main
    const { speed } = data.wind
    const {sunrise, sunset} = data.sys
        console.log(name, icon, temp, humidity, speed, sunrise, sunset);

    //To display Weather to the site
    document.querySelector(".city").innerText = "Weather In" + name;
    document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".short").innerText = description;
    document.querySelection(".temperature").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind-speed").innerText = "Wind Speed: " + speed + "MPH"
    document.querySelector(".sunrise").innerText = "Sunrise: " + sunrise;
    document.querySelector(".sunset").innerText = "Sunset: " + sunset;
    document.querySelector(".weather-today").classList.remove("loading");
    }
  }


form.addEventListener ("submit", function (event) {
  event.preventDefault();
  var cityName = searchInput.value;
  console.log(cityName);
  getCurrentWeatherInfo(cityName);
})

getCurrentWeatherInfo("Los Angeles") 





