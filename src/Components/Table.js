import React,{useState} from 'react';
import Arrow from './Arrow'
import {connect} from 'react-redux'
import {search} from '../Actions/search'
import {showCard} from '../Actions/showCard'
import Card from './Card'
import Pagination from '../Components/Pagination'

const Table =({data,sort,forwardBool,arrowProp,getSearch,getCard,filterData}) => {

    const [currenPagination,setCurrentPagination] = useState(1);//Кол-во постов
    const [currentPostPerPagin] = useState(50);//кол-во постов в пагинации
    const [inputText, setInputText] = useState('');//inputText - состояние введенного текста внутри
    const changeInputText = (e) => {
        setInputText(e.target.value)
    }

    let sortUp = (th_name,forward) => {//1 арг - имя th. 2 арг - если sort в сторе true/false для каждого свое значение asc/desc
        sort(th_name,forward)
    }

    const sendText = (e) => {
        e.preventDefault()
        getSearch(inputText,data)
    }

    const showItem = (item) => {
        getCard(item)
    }

    const item = filterData.card;// клиент при клике
    const indexOfLastPost = currenPagination * currentPostPerPagin //индекс полседнего элемента пагинации
    const indexOfFirstPost = indexOfLastPost - currentPostPerPagin //индекс 1 эл та пагинации
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)//массив для 1 окна

    //функция при клике по пагинации тега а 

    const paginate = (pageNamber) => setCurrentPagination(pageNamber)

  return (
    <>
        <form className="ui form">
            <div className="field">
                <label>Search</label>
                <input type="text" placeholder="Enter text ..." onChange={changeInputText}/>
            </div>
            <button className="ui button" onClick={sendText}>Submit</button>
        </form>

    <table className="ui celled table">
        <thead>
            <tr>
                <th onClick={()=>sortUp('id',`${forwardBool ? 'asc' : 'desc'}`)}>ID</th>
                <th onClick={()=>sortUp('firstName',`${forwardBool ? 'asc' : 'desc'}`)}>First Name</th>
                <th onClick={()=>sortUp('lastName',`${forwardBool ? 'asc' : 'desc'}`)}>Last Name</th>
                <th onClick={()=>sortUp('email',`${forwardBool ? 'asc' : 'desc'}`)}>E-mail</th>
                <th onClick={()=>sortUp('phone',`${forwardBool ? 'asc' : 'desc'}`)}>Phone</th>
                <th><Arrow arrow={arrowProp}/></th>
            </tr>
        </thead>
        <tbody>
            { currentPosts.map((item,i) =>(//массив
                <tr key={i} className="tr_hover" onClick={()=>{showItem(item)}}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
        </tbody>
    </table>

    {item.id ? <Card info={item}/> : null}

    <Pagination postPerPaige={currentPostPerPagin} totalPosts={data.length} paginate={paginate} />

    </>
  );

}

const mapStateToProps = ({filterData}) => ({
    filterData
  })
  
  const mapDispatchToProps = dispatch => {
    return{
      getSearch: (text,data) => dispatch(search(text,data)),
      getCard: item => dispatch(showCard(item))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Table);