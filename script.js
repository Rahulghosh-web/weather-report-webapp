let isCelsius = true;

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "0a17ba85a7e744350fb997c980ff2c3a"; // my  Weatherstack free API key is used ////
  const units = isCelsius ? "m" : "f";  // Weatherstack uses 'm' for Celsius and 'f' for Fahrenheit /////

  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}&units=${units}`;

  const response = await fetch(url);

  if (!response.ok) {
    alert("City not found,try adding city and country!");
    return;
  }

  const data = await response.json();
  if (data.error) {
    alert("City not found,try adding city and country !");
    return;
  }

  document.getElementById("cityName").innerText = `${data.location.name}, ${data.location.country}`;
  document.getElementById("temperature").innerText = `${Math.round(data.current.temperature)}°${isCelsius ? 'C' : 'F'}`;
  document.getElementById("description").innerText = data.current.weather_descriptions[0];
  document.getElementById("weatherIcon").src = data.current.weather_icons[0];
}



function toggleUnit() {
  const toggle = document.getElementById("unitToggle");
  const label = document.getElementById("toggleLabel");

  isCelsius = toggle.checked; // If checked, it's Celsius
  label.textContent = isCelsius ? "Celsius" : "Fahrenheit";

  getWeather(); 
}
//for checkbox system which i used at begining but doesnt looks good

// function toggleUnit() {
//   isCelsius = !isCelsius;
//   getWeather(); 
