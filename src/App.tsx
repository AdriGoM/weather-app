import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './styles/App.css';
import Home from './components/Home'

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
    <Home></Home>
    </div>
  </Provider>
    
  );
}

export default App;
