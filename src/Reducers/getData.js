import _ from 'lodash';

const initialState = {
    data:[],
    isFetching:false,
    isError:"",
    sort:true,
    arrow:'default',
}

export function getData(state = initialState, action){
    switch(action.type){
        case "GET_DATA_REQUEST":
            return{...state, isFetching:true}
        case "GET_DATA_SUCCESS":
            return{...state, data:action.payload, isFetching:false}
        case "GET_DATA_ERROR":
            return{...state, isError:action.payload, isFetching:false}
        case "SORT":
            return{...state, data:_.orderBy(state.data,action.payload.name,action.payload.forward),sort:!state.sort,arrow:action.payload.forward}  
        default:
            return state        
    }
}