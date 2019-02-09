import React, {Component} from 'react';

function Menu(props) {
    return <div className='menu'>
        <h3>Add Items</h3>
        <div className='menuitems'>
            {props.children}
        </div>
    </div>
}

export default Menu