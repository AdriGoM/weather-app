export const toCelsius = (source) => {
    if(!source)
        return "No data to show!"
    if (typeof source !== "number")
        return "Invalid type of data!"    

    return Math.trunc(source - 293.15);
}

export const toKilometersHour = (source) => {
    if(!source)
        return "No data to show!"
    if (typeof source !== "number")
        return "Invalid type of data!"    

    return Math.trunc(source * (60*60)/1000);
}

export const getWeatherIcon = (weatherId) => {
    var result = "";
    switch(true) {
        case (weatherId >= 200 && weatherId < 300):
            result = "http://openweathermap.org/img/wn/11d@2x.png";
            break;
        case (weatherId >= 300 && weatherId < 500):
            result = "http://openweathermap.org/img/wn/09d@2x.png";
            break;
        case (weatherId >= 500 && weatherId < 600):
            result = "http://openweathermap.org/img/wn/10d@2x.png";
            break;
        case (weatherId >= 600 && weatherId < 700):
            result = "http://openweathermap.org/img/wn/13d@2x.png";
            break;
        case (weatherId >= 700 && weatherId < 800):
            result = "http://openweathermap.org/img/wn/50d@2x.png";
            break;
        case weatherId == 800:
            result = "http://openweathermap.org/img/wn/01d@2x.png";
            break;
        case (weatherId > 800):
            result = "http://openweathermap.org/img/wn/02d@2x.png";
            break;
        default:
            break;
    }
    return result;
}