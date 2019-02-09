import React, {Component} from 'react';


function MenuItems(props) {
    const {name, price, icon} = props.menuitem;
    return <button className=' button menuitem col-4' onClick={() => props.addMenuItem(name, +1)}>
        <div className=''>
            <div className='icon'>{icon}</div>
            <div className='menuitemname'>{name} {price} KGS</div>
        </div>
    </button>


}

export default MenuItems