const API_key = '0190468170b148c89f091358232406';

function getCurrentWeather() {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_key}`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const weatherData = document.getElementById('weatherData');
      weatherData.innerText = `Current Weather in London: ${data.weather[0].description}`;
    })
    .catch((error) => console.log(error));
}
