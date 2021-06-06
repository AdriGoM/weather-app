import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import weatherReducer from './Weather/weatherReducer'

const store = createStore(
    weatherReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store