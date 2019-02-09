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
            {name: 'coffee', count: 0, total: 0},
            {name: 'tea', count: 0, total: 0},
            {name: 'ice-cream', count: 0, total: 0},
            {name: 'hamburger', count: 0, total: 0},
            {name: 'cheesebuger', count: 0, total: 0},
            {name: 'fries', count: 0, total: 0},
        ]
    };

    addMenuItem = (name, value) => {
        {
            console.log(name, value)
        }
        let index = this.state.order.findIndex(item => item.name === name);
        let price = MENU.find(item => item.name === name).price;
        let orderItem = {...this.state.order[index]};
        orderItem.count += value;

        orderItem.total = orderItem.count * price;


        let order = [...this.state.order];
        order[index] = orderItem;
        let state = {...this.state, order};

        this.setState(state);
    };

    getTotal = () => {
        let total = 0;
        for(let i = 0; i < this.state.order.length; i++) {
            total += this.state.order[i].total;
        }
        return total;


    };

    render() {
        return (
            <div className="App">
                <div className="container mt-3">
                    <div className='row'>
                    <Order total={this.getTotal()} >

                        {this.state.order.map(item =>
                            <OrderDetails orderitem={item} key={item.name} addMenuItem={this.addMenuItem}
                            />
                        )}
                    </Order>


                    <Menu>
                        {MENU.map(item =>
                            <MenuItems menuitem={item} key={item.name} addMenuItem={this.addMenuItem}>


                            </MenuItems>
                        )}
                    </Menu>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
