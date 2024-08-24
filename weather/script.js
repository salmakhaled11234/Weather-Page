document.getElementById('submit-btn').addEventListener('click', function() {
    const cityName = document.getElementById('city-input').value.trim();
    const apiKey = 'd3394c93bfcc3937c925205746efb1f8';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // Show loading message while fetching data
    document.getElementById('city-name').textContent = 'Loading...';
    document.getElementById('temperature').textContent = '';
    document.getElementById('weather-condition').textContent = '';
    document.getElementById('weather-icon').style.display = 'none'; // Hide icon

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // Update UI with the fetched data
            document.getElementById('city-name').textContent = `Weather in ${data.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('weather-condition').textContent = `Condition: ${data.weather[0].description}`;
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.getElementById('weather-icon').style.display = 'block'; // Show icon
        })
        .catch(error => {
            // Handle errors and update UI
            document.getElementById('city-name').textContent = 'City not found!';
            document.getElementById('temperature').textContent = '';
            document.getElementById('weather-condition').textContent = '';
            document.getElementById('weather-icon').style.display = 'none'; // Hide icon on error
            console.error(error);
        });
});
