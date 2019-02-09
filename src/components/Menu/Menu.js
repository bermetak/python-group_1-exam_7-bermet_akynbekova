import React, {Component} from 'react';

function Menu(props) {

    return <div className='menu col-8 m-2 p-2'>
        <h3>Add Items</h3>
        <div className='menuitems row p-3'>
            {props.children}
        </div>
    </div>
}

export default Menu