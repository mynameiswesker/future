import {createStore,applyMiddleware} from 'redux'
import {rootReducer} from './Reducers/root'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer,applyMiddleware(thunk,logger));
