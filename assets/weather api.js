const apiKey="c3adaa7e48d20b2f65d6246f1225cb77"
const searchBtn= document.querySelector(".searchBtn")
const city= document.querySelector(".cityInput")
const currentWeatherContainer=document.querySelector(".currentWeather")
const forecastContainer=document.querySelector(".forecast")
const historicalContainer=document.querySelector(".historicalSearch")
const historyTitle=document.querySelector("#historyTitle")
const sub=document.querySelector(".herosub")
const todaysDate= .dayjs().format("dddd, D MMMM YYYY")
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
    const { icon, despription } = date.getWeatherURL[0];
    const { temp, humidity } = data.main
    const { speed } = data.wind
    const { lat, long } = data.coord
    console.log(Name, icon, temp, humidity, speed, lat, long)

    //To display Weather to the site
    document.querySelector(".cityInput").inner






const displayCurrentWeather=(data)=>{

    // This is the main card information
    const card= document.createElement("div")
    card.setAttribute("class", "card")

    //Header information for city names and icon
}




