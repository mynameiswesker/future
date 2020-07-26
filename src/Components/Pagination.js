import React from 'react';

const Pagination =({postPerPaige,totalPosts,paginate}) => {

    const paigeNumbers = [];

    for(let i=1; i<= Math.ceil(totalPosts / postPerPaige); i++){
        paigeNumbers.push(i)
    }

    return(
        <nav>
            <ul className="ui pagination menu">
                {paigeNumbers.map(number=>{
                    return(
                        <li key={number}>
                            <a onClick={()=> paginate(number)} href="#" className="item">{number} </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination;