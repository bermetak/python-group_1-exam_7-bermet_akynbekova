import React, {Component} from 'react';


function MenuItems(props) {
    const {name, price, icon} = props.menuitem;
    return <div className='menuitem'>

        <button onClick={() => props.addMenuItem(name, +1)}>
            <div>{icon}</div>
            <div>{name} {price} KGS</div>

        </button>
    </div>

}

export default MenuItems