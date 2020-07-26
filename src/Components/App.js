import React from 'react';
import {connect} from 'react-redux'
import {getBigData} from '../Actions/getBigData'
import {sortUp} from '../Actions/sortUp'
import {getLittleData} from '../Actions/getLittleData'
import Fetching from '../Components/Fetching'
import Table from '../Components/Table'

export const App =({getData,getbigdata,getlittledata,getSort,filterData}) => {

  let data = getData.data;//данные таблицы

  let isFetching = getData.isFetching;//индикатор загрузки

  let error = getData.isError//ошибка при загрузке

  let forwardBool = getData.sort//true/false 

  let arrowProp = getData.arrow// в стайте default (asc,desc при нажатии на th сортировка)

  let text = filterData.text // введенный текст пользователем

  let searchData = filterData.data // найденный массив данных таблицы

  if(text.length && searchData.length){//если что то ищем ...
    return(
      <Table data={searchData} sort={getSort} forwardBool={forwardBool} arrowProp={arrowProp} />
    )
  }

  if(error.message){
    return(
      <div className="error">
        {error.message}
      </div>
    )
  }
  
  return (// если не ищем а загружаем и смотрим
    <>
      <div className="App">
          <button onClick={getlittledata}>little data</button>
          <button onClick={getbigdata}>big data</button>
      </div>

      {isFetching ? <Fetching /> : null}

      {data.length ? <Table data={data} sort={getSort} forwardBool={forwardBool} arrowProp={arrowProp} /> : null}
</>
  );
}

const mapStateToProps = ({getData,filterData}) => ({
  getData,
  filterData
})

const mapDispatchToProps = dispatch => {
  return{
    getbigdata: ()=> dispatch(getBigData()),
    getlittledata: ()=> dispatch(getLittleData()),
    getSort: (name,forward)=> dispatch(sortUp(name,forward)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
