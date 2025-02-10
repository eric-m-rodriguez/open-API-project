/* Fetch Open-Meteo API */
let githubUsername = 'eric-m-rodriguez'; /*creates variable for GitHub username*/

let weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=45.5234&longitude=-122.6762&current=temperature_2m,is_day,precipitation,cloud_cover,wind_speed_10m,wind_gusts_10m&hourly=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch'; /*creates variable for GitHub URL*/

fetch (weatherUrl) /*fetches data from GitHub API*/
    .then(response => response.json()) /*parses response as JSON*/
    .then(repositories => {
        console.log(repositories); /*logs repos to console*/  
    })
    
    .catch (error => 
        console.error("Error", error.message)); /*logs error message to the console */

/*Adding updates here to create new lesson-13 pull request; to delete later*/