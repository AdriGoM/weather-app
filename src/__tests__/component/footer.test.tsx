
/// <reference types="jest" />

import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../../components/Footer';
import { screen } from '@testing-library/dom'


describe('Footer component should render message', () => {
  var result;

  const { getByTitle } = render(
    <Footer />
  );

  result = getByTitle('message')

  test('Footer should render message', () => {
    expect(result).toBeTruthy()
  });
});

describe('Footer component should render image', () => {
  var result;

  result = screen.getByAltText('openWeather-ico')

  test('Footer should render image', () => {
    expect(result).toBeTruthy()
  });
});



