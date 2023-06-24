//your JS code here. If required.
 const API_key = '87e4d8152db8377e68f0144c06dbc0e3';
function getCurrentWeather() {
  const URL =
    `http://api.weatherapi.com/v1/current.json?key=${API_key}/q='london'`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        const weatherData = document.getElementById('weatherData');
        weatherData.innerText = `Current Weather in london: ${data.error.message}` //
    }).catch((er=> console.log(er)));
}