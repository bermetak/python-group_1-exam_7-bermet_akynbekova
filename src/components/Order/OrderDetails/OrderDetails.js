import React, {Component} from 'react';


function OrderDetails(props) {
    const {name, count, total} = props.orderitem
    return <div className='orderitem'>
        {count > 0 ? <p className='menuitemname'>{name} * {count} = {total}</p> : null}


    </div>
}

export default OrderDetails