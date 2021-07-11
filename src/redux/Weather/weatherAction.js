import axios from 'axios'
import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE
} from './weatherType'

export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch(fetchWeatherRequest())
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
            .then(response => {
                // response.data is the users
                const weather = response.data
                dispatch(fetchWeatherSuccess(weather))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchWeatherFailure(error.message))
            })
    }
}

export const fetchWeatherRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST
    }
}

export const fetchWeatherSuccess = weather => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: weather
    }
}

export const fetchWeatherFailure = error => {
    return {
        type: FETCH_WEATHER_FAILURE,
        payload: error
    }
}