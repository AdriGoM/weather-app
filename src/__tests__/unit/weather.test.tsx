/// <reference types="jest" />
import { toCelsius, toKilometersHour, getWeatherIcon } from '../../helpers/weatherHelper'


test('toCelsius should return kelvin temperature converted correctly', () => {
  
  // arrange
  var toConvert = 300;
  var expected = 26;

  // act
  var result = toCelsius(toConvert);

  // assert
  expect(result).toBe(expected);
});

test('toCelsius should return no data meesage if temperature is undefined', () => {
  
  // arrange
  var toConvert = undefined;
  var expected = "No data to show!"

  // act
  var result = toCelsius(toConvert);

  // assert
  expect(result).toBe(expected);
});

test('toCelsius should return invalid data type message if temperature is not a number', () => {
 
  // arrange
  var toConvert = "300";
  var expected = "Invalid type of data!"

  // act
  var result = toCelsius(toConvert);

  // assert
  expect(result).toBe(expected);
});

test('toKilometersHour should return speed converted correctly', () => {
  
  // arrange
  var toConvert = 20;
  var expected = 72;

  // act
  var result = toKilometersHour(toConvert);

  // assert 
  expect(result).toBe(expected);
});

test('toKilometersHour should return no data meesage if speed is undefined', () => {

  // arrange
  var toConvert = undefined;
  var expected = "No data to show!"

  // act
  var result = toKilometersHour(toConvert);

  // assert
  expect(result).toBe(expected);
});

test('toCelsius should return invalid data type message if speed is not a number', () => {

  // arrange
  var toConvert = "300";
  var expected = "Invalid type of data!"

  // act
  var result = toKilometersHour(toConvert);

  // assert
  expect(result).toBe(expected);
});

test('getWeatherIcon should return thunderstorm image if weather code is between 200 and 300', () => {
  
  // arrange
  var weatherId = "200";
  var expected = "http://openweathermap.org/img/wn/11d@2x.png";

  // act
  var result = getWeatherIcon(weatherId);

  // assert
  expect(result).toBe(expected);
});

test('getWeatherIcon should return clear sky image if weather code is equal to 800', () => {

  // arrange
  var weatherId = "800";
  var expected = "http://openweathermap.org/img/wn/01d@2x.png";

  // act
  var result = getWeatherIcon(weatherId);
  
  // assert
  expect(result).toBe(expected);
});
