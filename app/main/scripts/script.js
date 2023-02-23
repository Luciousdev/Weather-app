// day + month
const currentDate = new Date();
const day = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const monthName = monthNames[monthIndex];
const result = day + " " + monthName;
document.getElementById('date').innerHTML = result;

setInterval(() => {
    // Time in hours/minutes/seconds
    const time = currentDate.getHours() + ":" + currentDate.getMinutes()
    document.getElementById('time').innerHTML = time;
    console.log('time updated');
}, 60000);

const api = '';
const city = 'Amsterdam';

const currentTempElem = document.getElementById('currentTemp');
const humidityElem = document.getElementById('humidity');
const weatherIconElem = document.getElementById('weatherIcon');

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const currentTemp = data.main.temp;
        const humidity = data.main.humidity;
        const weatherIcon = data.weather[0].icon;
        const weatherDesc = data.weather[0].description;

        currentTempElem.textContent = `${currentTemp}°C`;
        humidityElem.textContent = `Humidity: ${humidity}%`;
        weatherIconElem.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherDesc}">`;
    })
    .catch(error => console.error('Error fetching weather data:', error));

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric`;

fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        const forecast = data.list;
        const forecastElem = document.querySelector('.forecast');

        for (let i = 0; i < 7; i++) {
            const forecastDay = forecast[i * 8];
            const date = new Date(forecastDay.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
            const temp = forecastDay.main.temp;
            const weatherIcon = forecastDay.weather[0].icon;
            const weatherDesc = forecastDay.weather[0].description;

            const dayElem = document.createElement('div');
            dayElem.classList.add('day');

            const dateElem = document.createElement('p');
            dateElem.classList.add('date');
            dateElem.textContent = date;
            dayElem.appendChild(dateElem);

            const iconElem = document.createElement('p');
            iconElem.classList.add('icon');
            iconElem.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherDesc}">`;
            dayElem.appendChild(iconElem);

            const tempElem = document.createElement('p');
            tempElem.classList.add('temp');
            tempElem.textContent = `${temp}°C`;
            dayElem.appendChild(tempElem);

            forecastElem.appendChild(dayElem);
        }
    })
    .catch(error => console.error('Error fetching forecast data:', error));