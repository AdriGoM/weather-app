import '../styles/WeatherResult.css';
import { IoPartlySunnySharp } from 'react-icons/io5';
import { GrLocation } from 'react-icons/gr';
import { WiStrongWind } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { FaTemperatureLow } from 'react-icons/fa';

function WeatherResult() {
    return (
        <div className="WeatherResult">
            <h3><GrLocation/> Barcelona, Spain</h3>
            <span className="weather-icon"><IoPartlySunnySharp/></span> 
            <h2>Sunny, 20º</h2>
            <br></br>
            <h2><span className="temperature-icon"><FaTemperatureHigh/></span> 22º</h2>
            <h2><FaTemperatureLow/> 14º</h2>
            <h2><WiHumidity/> 14%</h2>
            <h2><WiStrongWind/> 20km/h</h2>    
        </div>
    );
}

export default WeatherResult;