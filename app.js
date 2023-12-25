// Define a constant for the API key
const API_KEY = "515b173abc16782c003dc83cdc56a3b9"
// Define a constant for the base URL of the weather API
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
// Select the temperature element from the DOM
const temp = document.querySelector(".temp")
// Select the city element from the DOM
const city = document.querySelector(".city")
// Select the wind speed element from the DOM
const wind = document.querySelector(".wind")
// Select the humidity element from the DOM
const humidity = document.querySelector(".humidity")
// Select the input element from the DOM
const input = document.querySelector("input")
// Select the button element from the DOM
const searchBtn = document.querySelector(".search-btn")

// Define a function to get the weather for a given city
// Inside the function:
    // Use fetch to make a GET request to the weather API with the city and API key
    // When the response is received, convert it to JSON
    // When the JSON data is available, update the temperature, city, wind speed, and humidity elements with the data
    // If there's an error, log it to the console
function getWeather(cityName){
    fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        temp.textContent = data.main.temp + "°C"
        city.textContent = data.name
        wind.textContent = data.wind.speed + " km/h"
        humidity.textContent = data.main.humidity + "%"
    })
    .catch(error => console.log(error))
}
// Add an event listener to the button
// When the button is clicked, call the getWeather function with the value of the input element
searchBtn.addEventListener("click", () => {
    getWeather(input.value)
})
