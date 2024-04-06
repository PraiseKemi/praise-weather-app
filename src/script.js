function displayWeather(response) {
    let cityElement = document.querySelector("#current-city");
    let temperature = document.querySelector("#current-temperature");
    let weatherCondition = document.querySelector("#current-condition");
    let humidity = document.querySelector("#humidity");
    let windSpeed = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon");
    
    
    cityElement.innerHTML = response.data.city;
    temperature.innerHTML = Math.round(response.data.temperature.current);
    weatherCondition.innerHTML = response.data.condition.description;
    humidity.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-temperature-icon">`;
}

function searchSubmitFunction(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let city = searchInput.value;

    let apiKey = "44a34b249b930f2abo9988f7a607t982";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
}

let searchInputElement = document.querySelector("#search-form");
searchInputElement.addEventListener("submit", searchSubmitFunction);

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (hours < 10) {
        hours = `0${hours}`;
    }

    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);