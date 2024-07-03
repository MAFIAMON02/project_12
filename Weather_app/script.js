const container = document.querySelector(".container");
const search = document.querySelector('.search-box');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.wea-details');
const error = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

search.addEventListener('click', () => {
    const apiKey = '3f837e2d7d1422324c7aab57a9a58cb7';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())

        .then(json => {

            if (json.cod == '404') {
                cityHide.textContent = city;
                container.style.height = '400px';
                weatherBox.classList.remove('active');
                weatherDetails.classList.remove('active');
                error.classList.add('active');
                return;
            };

            container.style.height = '555px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error.classList.remove('active');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temp');
            const desc = document.querySelector('.weather-box .desc');
            const humidity = document.querySelector('.wea-details .humidity span');
            const wind = document.querySelector('.wea-details .wind span');

            if (cityHide.textContent == city) {
                return;
            }
            else {
                cityHide.textContent = city;

                container.style.height = '555px';
                container.classList.add('active');
                weatherBox.classList.add('active');
                weatherDetails.classList.add('active');
                error.classList.remove('active');

                setTimeout(() => {
                    container.classList.remove('active');
                }, 2500);

                switch (json.weather[0].main) {
                    case 'Clear':
                        image.src = './images/clear.png';
                        break;

                    case 'Rain':
                        image.src = './images/rain.png';
                        break;

                    case 'Snow':
                        image.src = './images/snow.png';
                        break;

                    case 'Clouds':
                        image.src = './images/cloud.png';
                        break;

                    case 'Mist':
                        image.src = './images/mist.png';
                        break;

                    case 'Haze':
                        image.src = './images/mist.png';
                        break;

                    default:
                        image.src = './images/cloud.png';
                }

                temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
                desc.innerHTML = `${json.weather[0].description}`;
                humidity.innerHTML = `${json.main.humidity}%`;
                wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

                const infoweather = document.querySelector('.info-weather');
                const infohumidity = document.querySelector('.info-humidity');
                const infowind = document.querySelector('.info-wind');

                const elCloneInfoWeather = infoweather.cloneNode(true);
                const elCloneInfoHumidity = infohumidity.cloneNode(true);
                const elCloneInfoWind = infowind.cloneNode(true);

                elCloneInfoWeather.id = 'clone-info-weather';
                elCloneInfoWeather.classList.add('active-clone');

                elCloneInfoHumidity.id = 'clone-info-humidity';
                elCloneInfoHumidity.classList.add('active-clone');

                elCloneInfoWind.id = 'clone-info-wind';
                elCloneInfoWind.classList.add('active-clone');

                setTimeout(() => {
                    infoweather.insertAdjacentElement("afterend", elCloneInfoWeather);
                    infohumidity.insertAdjacentElement("afterend", elCloneInfoHumidity);
                    infowind.insertAdjacentElement("afterend", elCloneInfoWind);
                }, 2200);

                const cloneInfoWeather = document.querySelectorAll('.info-weather.active-clone');
                const totalCloneInfoWeather = cloneInfoWeather.length;
                const cloneInfoWeatherFirst = cloneInfoWeather[0];

                const cloneInfoHumidity = document.querySelectorAll('.info-humidity.active-clone');
                const cloneInfoHumidityFirst = cloneInfoHumidity[0];

                const cloneInfoWind = document.querySelectorAll('.info-wind.active-clone');
                const cloneInfoWindFirst = cloneInfoWind[0];

                if (totalCloneInfoWeather > 0) {
                    cloneInfoWeatherFirst.classList.remove('active-clone');
                    cloneInfoHumidityFirst.classList.remove('active-clone');
                    cloneInfoWindFirst.classList.remove('active-clone');

                    setTimeout(() => {
                        cloneInfoWeatherFirst.remove();
                        cloneInfoHumidityFirst.remove();
                        cloneInfoWindFirst.remove();

                    }, 2200);
                }
            }

        });

}); 