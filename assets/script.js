
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

addFav.addEventListener("click", function(addFavorite){
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
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var cityName = searchInput.value;
  getCurrentWeatherInfo(cityName);


const apiKey="c3adaa7e48d20b2f65d6246f1225cb77"
const searchBtn= document.querySelector(".searchBtn")
const city= document.querySelector(".cityInput")
const currentWeatherContainer=document.querySelector(".currentWeather")
const forecastContainer=document.querySelector(".forecast")
const historicalContainer=document.querySelector(".historicalSearch")
const historyTitle=document.querySelector("#historyTitle")
const sub=document.querySelector(".herosub")
const todaysDate= dayjs().format("dddd, D MMMM YYYY")
sub.textContent=todaysDate
let cityArray=[]

const getHistory=(searchHistory)=>{
    const btn=document.createElement("button")
    btn.setAttribute("class", "button")
    btn.setAttribute("value", searchHistory)
    btn.textContent=searchHistory
    historicalContainer.append(btn)
    if(searchHistory){
        historyTitle.classList.remove("hide")
    }
}

let searchHistory=JSON.parse(localStorage.getItem("history"))|| []
console.log(searchHistory)
for(let i=0; i<searchHistory.length; i++){
    getHistory(searchHistory[i])
}

const getApiData=(userInput)=>{
    console.log(userInput)
    const getWeatherURL='https://api.openweathermap.org/data/2.5/weather?q={userInput}&appid={API key}&units=imperial'

    fetch(getWeatherURL)
    .then((response)=>{return response.json()})
    .then((data)=>{
        displayCurrentWeather(data)
    })
}

    const { Name } = data; 
    const { icon, description } = date.getWeatherURL[0];
    const { temp, humidity } = data.main
    const { speed } = data.wind
    const { lat, long } = data.coord
    console.log(Name, icon, temp, humidity, speed, lat, long)

    //To display Weather to the site
    document.querySelector(".cityInput").innerText = "Weather In" + Name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.queryselection(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".speed").innerText = "Wind Speed: " + speed + "MPH"
}
