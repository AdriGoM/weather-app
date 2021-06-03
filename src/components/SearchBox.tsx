import '../styles/SearchBox.css';
import { SiReact } from 'react-icons/si';
import React from 'react';

class SearchBox extends React.Component {

    componentDidMount() {

    }

    fetchOpenWeather() {
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=e2a9f3d7993c0b9d5043b663318059c4';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => console.log('Test fecth', data));
    }

    render() {
      return (
      <div className="container">
      <div className="search-box">
          <input type="text" className="search-input" placeholder="Search for a localization.." />
          <button className="search-button">
              <SiReact/>
          </button>
      </div>
  </div>
    );}
  }

export default SearchBox;