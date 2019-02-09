import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import MenuItems from './components/Menu/MenuItems/MenuItems';
import Order from './components/Order/Order';
import OrderDetails from './components/Order/OrderDetails/OrderDetails';


const MENU = [
    {name: 'coffee', price: 70, icon: <i class="fas fa-coffee"></i>},
    {name: 'tea', price: 50, icon: <i class="fas fa-coffee"></i>},
    {name: 'ice-cream', price: 40, icon: <i class="fas fa-ice-cream"></i>},
    {name: 'hamburger', price: 80, icon: <i class="fas fa-hamburger"></i>},
    {name: 'cheesebuger', price: 90, icon: <i class="fas fa-hamburger"></i>},
    {name: 'fries', price: 45, icon: <i class="fas fa-utensils"></i>},
];

class App extends Component {
    state = {
        order: [
            {name: 'coffee', count: 5, total: 0},
            {name: 'tea', count: 0, total: 0},
            {name: 'ice-cream', count: 0, total: 0},
            {name: 'hamburger', count: 0, total: 0},
            {name: 'cheesebuger', count: 0, total: 0},
            {name: 'fries', count: 0, total: 0},
        ]
    };

    addMenuItem = (name, value) => {

    }

    getTotal = () => {

    }
    render() {
        return (
            <div className="App">
                <div className="container row mt-3">
                    <Order total={this.getTotal()}>
                        {this.state.order.map(item =>
                            <OrderDetails orderitem={item} key={item.name}
                            />
                        )}
                    </Order>




                        <Menu>
                            {MENU.map(item =>
                                <MenuItems menuitem={item} key={item.name} addMenuItem={this.addMenuItem}>
                                    {console.log(item)}


                                </MenuItems>
                            )}
                        </Menu>


                </div>
            </div>
    );
    }
    }

    export default App;
