import React, {Component} from 'react';

function Menu(props) {
    return <div className='menu col'>
        <h3>Add Items</h3>
        <div className='menuitems row '>
            {props.children}
        </div>
    </div>
}

export default Menu