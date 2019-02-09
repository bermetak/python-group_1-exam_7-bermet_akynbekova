import React, {Component} from 'react';


function OrderDetails(props) {
    const {name, count, total} = props.orderitem;
    return <div className='orderitem'>

            {count > 0 ?
            <p className='menuitemname text-left'>{name} * {count} = {total}
                <a onClick={() => props.addMenuItem(name, -1)}> <i className="fas fa-times"></i></a>
            </p>
            : null}



    </div>
}

export default OrderDetails