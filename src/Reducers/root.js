import {combineReducers} from 'redux'
import {getData} from './getData'
import {filterData} from './filterData'

export const rootReducer = combineReducers({
    getData,
    filterData
})