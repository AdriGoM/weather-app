/// <reference types="jest" />
import { toCelsius, toKilometersHour, getWeatherIcon } from '../../helpers/weatherHelper'


test('toCelsius should return kelvin temperature converted correctly', () => {

  var toConvert = 300;
  var result = toCelsius(toConvert);
  var expected = 26;

  expect(result).toBe(expected);
});

test('toCelsius should return no data meesage if temperature is undefined', () => {

  var toConvert = undefined;
  var result = toCelsius(toConvert);
  var expected = "No data to show!"

  expect(result).toBe(expected);
});

test('toCelsius should return invalid data type message if temperature is not a number', () => {

  var toConvert = "300";
  var result = toCelsius(toConvert);
  var expected = "Invalid type of data!"

  expect(result).toBe(expected);
});

test('toKilometersHour should return speed converted correctly', () => {

  var toConvert = 20;
  var result = toKilometersHour(toConvert);
  var expected = 72;

  expect(result).toBe(expected);
});

test('toKilometersHour should return no data meesage if speed is undefined', () => {

  var toConvert = undefined;
  var result = toKilometersHour(toConvert);
  var expected = "No data to show!"

  expect(result).toBe(expected);
});

test('toCelsius should return invalid data type message if speed is not a number', () => {

  var toConvert = "300";
  var result = toKilometersHour(toConvert);
  var expected = "Invalid type of data!"

  expect(result).toBe(expected);
});

test('getWeatherIcon should return thunderstorm image if weather code is between 200 and 300', () => {

  var weatherId = "200";
  var result = getWeatherIcon(weatherId);
  var expected = "http://openweathermap.org/img/wn/11d@2x.png";

  expect(result).toBe(expected);
});

test('getWeatherIcon should return clear sky image if weather code is equal to 800', () => {

  var weatherId = "800";
  var result = getWeatherIcon(weatherId);
  var expected = "http://openweathermap.org/img/wn/01d@2x.png";

  expect(result).toBe(expected);
});
