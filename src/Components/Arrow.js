import React from 'react';

const Arrow =({arrow}) => {

    if(arrow === 'desc'){
        return(
            <i className="sort up icon"></i>
        )
    }

    if(arrow === 'asc'){
        return(
            <i className="sort down icon"></i>
        )
    }

    return(
        <i className="sort icon"></i>
    )

}

export default Arrow;