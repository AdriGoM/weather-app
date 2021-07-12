import React from 'react';

function Footer() {
    return (
        <div className="Footer" style={{
            width: '25%',
            position: 'absolute',
            left: '50%',
            top: '90%',
            transform: 'translate(-50% , -50%)',
            textAlign: 'center',
            fontFamily: 'Merriweather'
        }}>
            <h4 title='message'> Powered by: <span className="open-img" style={{
            top: '98%',
            fontFamily: 'Merriweather',
            marginLeft: '10px'
        }}><img src="https://brands.home-assistant.io/_/openweathermap/logo.png" alt="openWeather-icon" style={{width: '100px'}}/></span></h4>
        </div>
    );
}

export default Footer;