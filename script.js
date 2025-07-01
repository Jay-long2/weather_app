const apiKey = process.env.API_KEY; // Replace with your key
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const conditions = document.getElementById("conditions");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    
    if (data.cod === 200) {
      cityName.textContent = data.name;
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      conditions.textContent = `Conditions: ${data.weather[0].description}`;
    } else {
      alert("City not found!");
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
    alert("Error fetching weather data.");
  }
}