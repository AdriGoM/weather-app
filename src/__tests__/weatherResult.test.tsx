
/// <reference types="jest" />

import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WeatherResult from '../components/WeatherResult';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);


describe('WeatherResult component should render search message tests', () => {
  let store;
  var result;


  beforeEach(() => {
    store = mockStore({
      loading: false,
      weather: undefined,
      error: false
    });

    const { getByTitle } = render(<Provider store={store}>
      <WeatherResult />
    </Provider>
    );

    result = getByTitle
  });

  test('WeatherResult should render search message', () => {
    expect(result("emptyWeather")).toBeInTheDocument()
  });
});

describe('WeatherResult should render loading', () => {
  let store;
  var result;


  beforeEach(() => {
    store = mockStore({
      loading: true,
      weather: [],
      error: ''
    });

    const { getByTitle } = render(<Provider store={store}>
      <WeatherResult />
    </Provider>
    );

    result = getByTitle
  });

  test('WeatherResult should render loading message', () => {
    expect(result("loadingMessage")).toBeInTheDocument();
  });
});

describe('WeatherResult should render error message', () => {
  let store;
  var result;


  beforeEach(() => {
    store = mockStore({
      loading: false,
      weather: [],
      error: 'API error'
    });

    const { getByTitle } = render(<Provider store={store}>
      <WeatherResult />
    </Provider>
    );

    result = getByTitle
  });

  test('WeatherResult should render error message', () => {
    expect(result("apiError")).toBeInTheDocument()
  });
});

