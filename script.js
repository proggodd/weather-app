
const apiKey = "fdcd786914865d86a6dbb8aec22b98c9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("input");
const searchBtn = document.querySelector("button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404)
    {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weather-icon").src = "images/" + toLowerCase(data.weather[0].main) + ".png";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})
