import '../styles/WeatherResult.css';
import { IoPartlySunnySharp } from 'react-icons/io5';
import { GrLocation } from 'react-icons/gr';
import { WiStrongWind } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { FaTemperatureLow } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';
import { connect } from 'react-redux'


function WeatherResult({ weatherData, loading, error}) {
    console.log(weatherData)
    if(weatherData) {
        return (
            loading ? (
                <div className="WeatherResult">
                    <h2>Loading</h2>
                </div>
            ) : error ? (
                <div className="WeatherResult">
                    <h1><BiError /></h1>
                    <h2>{error}</h2>
                </div>
            ) : weatherData && (
                <div className="WeatherResult">
                    <h3><GrLocation /> {weatherData.name}, {weatherData.sys.country}</h3>
                    <span className="weather-icon"><IoPartlySunnySharp /></span>
                    <h2>{weatherData.weather[0].description}, {weatherData.main.temp}</h2>
                    <br></br>
                    <h2><span className="temperature-icon"><FaTemperatureHigh /></span> {weatherData.main.temp_max}</h2>
                    <h2><FaTemperatureLow /> {weatherData.main.temp_min}</h2>
                    <h2><WiHumidity /> {weatherData.main.humidity}</h2>
                    <h2><WiStrongWind /> {weatherData.wind.speed}</h2>
                </div>
            )
        );
    } else {
        return (
            <div className="WeatherResult">
                <h2>Make a search to view the weather!</h2>
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