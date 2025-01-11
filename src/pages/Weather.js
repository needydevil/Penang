import React from 'react';
import './weather.css';

const Weather = () => {
    return (
        <div className='weather-page'>
            <div className='weather-page-section'>
                <div className='weather-image'>
                    <img
                        src='./weatherPng.png'
                        alt='Penang Weather'
                    />
                </div>
                <div className='weather-description'>
                    <h1>Penang's Weather</h1>
                    <p>
                        Penang, which is situated on Peninsular Malaysia's northwest coast, has a tropical rainforest environment with year-round high temperatures and heavy precipitation. The usual range of average temperatures is 24°C (75°F) to 32°C (90°F). Rainfall in the area averages about 2,477 millimetres (97.5 inches) each year.
                    </p>
                    <p>
                        The weather is typically warm and humid, with lots of sunshine and frequent rainfall. Rainfall is possible all year long, usually in the afternoons and for short periods of time. In contrast to the rest of the year, the months of late January through March are often drier and more humid. It's crucial to remember that weather patterns can change suddenly, and even while there may be dry seasons, rain might still fall during these times.
                    </p>
                    <p>
                        Furthermore, because of its closeness to Sumatra, Penang is exposed to dust particles from temporary forest fires that are transported by the wind, which sometimes brings to the Southeast Asian haze.
                    </p>
                    <p>
                        It's best to check local weather forecasts closer to the date of interest for the most accurate and current weather information.
                    </p>

                    <p className="weather-forecast">
                        Weather Forecast :
                        <a href="https://www.accuweather.com/en/my/george-town/234975/weather-forecast/234975"> https://www.accuweather.com/en/my/george-town/234975/weather-forecast/234975</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Weather;