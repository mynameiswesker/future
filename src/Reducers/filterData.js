import _ from 'lodash';

const initialState = {
    text:'',
    data:[],
    card:[]
}

export function filterData(state = initialState, action){
    switch(action.type){
        case "SEARCH":
            return{...state, text:action.payload.text, data:action.payload.data.filter(item => {
                return item['firstName'].toLowerCase().includes(action.payload.text.toLowerCase())
                  || item['lastName'].toLowerCase().includes(action.payload.text.toLowerCase())
                  || item['email'].toLowerCase().includes(action.payload.text.toLowerCase())
                  || item['phone'].toLowerCase().includes(action.payload.text.toLowerCase())
                  || (item.id === +action.payload.text)
              })}
        case "SHOW_CARD":
            return{...state, card:action.payload}
        case "SORT":
                return{...state, data:_.orderBy(state.data,action.payload.name,action.payload.forward),sort:!state.sort,arrow:action.payload.forward}    
        default:
            return state        
    }
}