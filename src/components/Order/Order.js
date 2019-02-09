import React, {Component} from 'react';

function Order(props) {
    return <div className='col'>
        <h3>Order Details:</h3>
{props.children}
<div>{props.total}</div>
    </div>

}

export default Order