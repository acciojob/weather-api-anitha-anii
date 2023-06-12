//your JS code here. If required.
 const getWeatherBtn = document.getElementById('getWeatherBtn');
 const weatherDataDiv = document.getElementById('weatherData');

        getWeatherBtn.addEventListener('click', async () => {
            try {
                const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=87e4d8152db8377e68f0144c06dbc0e3';

                const response = await fetch(url);
                const weatherData = await response.json();

                const weatherDescription = weatherData.weather[0].description;

                weatherDataDiv.textContent = `Current weather in London: ${weatherDescription}`;
            } catch (error) {
                console.log(error);
            }
        });