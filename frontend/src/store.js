import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { fileListReducers } from './reducers/fileReducers'
const reducer = combineReducers({
    fileList: fileListReducers,
})
const initialState = {}

const middleware = [thunk]
const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store