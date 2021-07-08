/// <reference types="jest" />
import { fetchWeather } from '../../redux/Weather/weatherAction'


test('fetchWeather returns information when is a real city', () => {

    var cityToSearch = "Barcelona";
    var result = fetchWeather(cityToSearch);
    var expectedResponse = 200;
  
    expect(result).toBe(expectedResponse);
  });

test('fetchWeather returns 404 when is a unreal city', () => {

    var cityToSearch = "King's Landing";
    var result = fetchWeather(cityToSearch);
    var expectedResponse = 404;
  
    expect(result).toBe(expectedResponse);
  });

test('fetchWeather returns 401 when api key is wrong', () => {

    var cityToSearch = "King's Landing";
    var result = fetchWeather(cityToSearch);
    var expectedResponse = 401;
  
    expect(result).toBe(expectedResponse);
  });