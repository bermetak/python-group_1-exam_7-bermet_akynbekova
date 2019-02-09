import React, {Component} from 'react';

function Order(props) {
    let total = props.total
    return <div className='order col-3 m-2 p-3'>
        <h3>Order Details:</h3>

        {props.children}
        { total > 0 ?


        <div>
            _________
            <br/>
            Total price: {props.total} KGS
        </div>
            :
            <p>Order is empty! <br/>Please add some items!</p>}
    </div>

}

export default Order