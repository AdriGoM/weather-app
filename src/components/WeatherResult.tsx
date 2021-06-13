// import '../styles/WeatherResult.css';
import React from 'react';
import { IoPartlySunnySharp } from 'react-icons/io5';
import { GrLocation } from 'react-icons/gr';
import { WiStrongWind } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { FaTemperatureLow } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { connect } from 'react-redux'
import { toCelsius, getWeatherIcon, toKilometersHour } from '../helpers/weatherHelper'


function WeatherResult({ weatherData, loading, error }) {
    if (weatherData) {
        return (
            loading ? (
                <div className="WeatherResult" title="loadingMessage">
                    <h2>Loading</h2>
                </div>
            ) : error ? (
                <div className="WeatherResult" title="apiError">
                    <h1><BiError /></h1>
                    <h2>{error}</h2>
                </div>
            ) : weatherData && (
                <div className="WeatherResult">
                    <h3><GrLocation /> {weatherData.name}, {weatherData.sys.country}</h3>
                    <img src={getWeatherIcon(weatherData.weather[0].id)} alt="weather-img"></img>
                    <h2>{weatherData.weather[0].description}, {toCelsius(weatherData.main.temp)}º</h2>
                    <br></br>
                    <h2><span className="temperature-icon"><FaTemperatureHigh /></span> {toCelsius(weatherData.main.temp_max)}º</h2>
                    <h2><FaTemperatureLow /> {toCelsius(weatherData.main.temp_min)}º</h2>
                    <h2><WiHumidity /> {weatherData.main.humidity}%</h2>
                    <h2><WiStrongWind /> {toKilometersHour(weatherData.wind.speed)} km/h</h2>
                </div>
            )
        );
    } else {
        return (
            <div className="WeatherResult" title="emptyWeather">
                <h2><BsSearch /></h2>
                <h2>Search for a weather update!</h2>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        weatherData: state.weather,
        error: state.error,
        loading: state.loading
    }
}


export default connect(
    mapStateToProps
)(WeatherResult)