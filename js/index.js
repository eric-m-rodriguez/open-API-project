document.addEventListener('DOMContentLoaded', () => {
    let weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=45.5234&longitude=-122.6762&current=temperature_2m,is_day,precipitation,cloud_cover,wind_speed_10m,wind_gusts_10m&hourly=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch';
  
    let weatherData = {};
  
    function fetchData(endpoint) {
      fetch(weatherUrl)
        .then(response => {
          console.log("API response status:", response.status);
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
          return response.json();
        })
        .then(data => {
          console.log("API data received:", data);
          weatherData = data;
          displayData(endpoint);
        })
        .catch(error => {
          console.error("Error: API", error.message);
          document.getElementById('weatherData').textContent = "Sorry, we couldn't retrieve the weather data at this time.";
        });
    }
  
    function displayData(endpoint) {
      const title = document.getElementById('title');
      const dataDisplay = document.getElementById('weatherData');
  
      if (endpoint === 'temperature') {
        title.textContent = "Current Temperature";
        const temp = weatherData.current ? weatherData.current.temperature_2m : "N/A";
        dataDisplay.innerHTML = `<p>The current temperature is <strong>${temp}°F</strong>.</p>`;
      } else if (endpoint === 'conditions') {
        title.textContent = "Weather Conditions";
        const conditions = weatherData.current ? (weatherData.current.is_day ? "Daytime" : "Nighttime") : "N/A";
        dataDisplay.innerHTML = `<p>It is currently <strong>${conditions}</strong>.</p>`;
      }
    }
  
    // Event listeners for navigation links
    document.getElementById('temperatureLink').addEventListener('click', () => {
      fetchData('temperature');
    });
  
    document.getElementById('conditionsLink').addEventListener('click', () => {
      fetchData('conditions');
    });
  
    // Initial data load (set to display temperature by default)
    fetchData('temperature');
  });