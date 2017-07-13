import React, { Component } from 'react';
import './../style/Popover.css';
import generateProductBox from './../util/generateProductBox';
import formatCurrency from './../util/formatCurrency';

export default class CartPopover extends Component {
    render() {
        if (!this.registered) {
            window._registerCartUpdateListener(() => {
                this.forceUpdate();
            })
            this.registered = true;
        }
        if (this.props.isActive)
            return (
                <div className="cartPopoverOuter">
                    <div onClick={this.props.onClose} className="cartPopoverBackground"></div>
                    <div className="cartPopover">
                        <table>
                            <caption>Cart</caption>
                            <tr>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                            <tbody>
                                {
                                    window._cart
                                        .map(a =>
                                            <tr key={a.name}>
                                                <td key={a.name + "name"}>{a.item.name}</td>
                                                <td key={a.name + "currency"}>{formatCurrency(a.item.price)}</td>
                                                <td key={a.name + "amount"}>{a.amount}</td>
                                            </tr>
                                        )
                                }
                            </tbody>
                        </table>
                        <button onClick={() => { window._cart.clear(); window._cart.update(); }}>Clear cart</button><button>Check out</button>
                    </div>
                </div>
            )
        return (<span></span>);
    }
}