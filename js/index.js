document.addEventListener('DOMContentLoaded', () => {

/*API URL for the weather API. This URL includes the latitude and longitude for Portland, Oregon, and requests the current temperature in Fahrenheit. */
   
const weatherUrl =  'https://api.open-meteo.com/v1/forecast?latitude=45.5234&longitude=-122.6762&hourly=temperature_2m&temperature_unit=fahrenheit&timezone=auto';

/*API URL for the air quality API. This URL includes the latitude and longitude for Portland, Oregon, and requests the current air quality index. */
    
const airQualityUrl = 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=45.5234&longitude=-122.6762&hourly=pm2_5&timezone=auto';

let weatherData = {};
let airQualityData = {};

    /*Fetch Weather Data (Temperature)*/
    function fetchWeather() {
        fetch(weatherUrl) 
        .then(response => {
          console.log("Weather API response status:", response.status);
          if (!response.ok) {
            throw new Error("Weather API failed");
          }
          return response.json();
        })
            .then(data => {
              console.log("Weather API data", data);
              weatherData = data;
              displayWeather(data);
            })
            .catch(error => {
              console.error("Error fetching weather data:", error.message);
              document.getElementById('weatherData').textContent = "Sorry, we couldn't retrieve the weather data at this time.";
            });
        }

    /*Fetch Air Quality Data*/
    function fetchAirQuality() {
        fetch(airQualityUrl)
        .then(response => {
            console.log("Air Quality API response status:", response.status);
            if (!response.ok) {
                throw new Error ("Air Quality API failed");
            }
            return response.json();
        })
        .then(data => {
            console.log("Air Quality API data", data);
            airQualityData = data;
            displayAirQuality(data);
        })
        .catch(error => {
            console.error("Error fetching air quality data:", error.message);
            document.getElementById('airQualityData').textContent = "Unable to fetch air quality data";
        });
    }

    /*Display Weather Temperature*/
        function displayWeather(data) {
            document.getElementById('temperatureTitle').textContent = "Current Temperature";

            const temp = (data.hourly && data.hourly.temperature_2m && data.hourly.temperature_2m.length > 0) ? data.hourly.temperature_2m[0] : "N/A";

            document.getElementById('airQualityData').innerHTML = "";

            document.getElementById('weatherData').innerHTML = `<p>The current Temperature is <strong>${temp} degrees Fahrenheit</strong>.</p>`;
        }

    /*Display Air Quality*/
            function displayAirQuality(data) {
                document.getElementById('airQualityTitle').textContent = "Air Quality Index";

                const aqi = (data.hourly?.pm2_5 && data.hourly.pm2_5.length > 0) ? data.hourly.pm2_5[0] : "N/A";

                document.getElementById('weatherData').innerHTML = "";

                document.getElementById('airQualityData').innerHTML = `<p>The current Air Quality Index is <strong>${aqi} ppm</strong>.</p>`;
                }

        document.getElementById('temperatureTitle').addEventListener('click', fetchWeather);
        document.getElementById('airQualityTitle').addEventListener('click', fetchAirQuality);
        
        fetchWeather();
    });
        
