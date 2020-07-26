import axios from 'axios'

export function getBigData(){
    return dispatch => {

        dispatch({
            type:"GET_DATA_REQUEST",//запрос
            payload:null
        })

            axios.get('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(data=>dispatch({
                type:"GET_DATA_SUCCESS",//успех
                payload:data.data
            }))
            .catch(resError=>dispatch({
                type:"GET_DATA_ERROR",
                payload:resError
            }))

    }
}