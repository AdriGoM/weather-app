import '../styles/SearchBox.css';
import { SiReact } from 'react-icons/si';
import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../redux/Weather/weatherAction'

interface MyProps {
  fetchWeather 
}

class SearchBox extends React.Component<MyProps, {}> {

        
  handleClick = () => {
    
    var inputVal = (document.getElementById("search-input") as HTMLInputElement).value;
    this.props.fetchWeather(inputVal)
 }

    render() {
      return (
      <div className="container">
      <div className="search-box">
          <input type="text" className="search-input" placeholder="Search for a location..." id="search-input"/>
          <button className="search-button" onClick={this.handleClick}>
              <SiReact/>
          </button>
      </div>
  </div>
    );}
  }

  const mapDispatchToProps = () => dispatch => {
    return {
        fetchWeather: (city) => dispatch(fetchWeather(city))
    }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBox)