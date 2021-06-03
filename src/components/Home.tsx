import '../styles/Common.css';
import SearchBox from './SearchBox'
import WeatherResult from './WeatherResult';
import Footer from './Footer';

function Home() {
  return (
    <div className="Home">
        <SearchBox></SearchBox>
        <WeatherResult></WeatherResult>
        <Footer></Footer>
    </div>
  );
}

export default Home;