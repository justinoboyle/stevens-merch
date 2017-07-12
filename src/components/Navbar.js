import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from './../util/formatCurrency';
import CartPopover from './../popover/CartPopover'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartActive: false
        }
    }
    render() {
        return (
            <div className="navbarContainer">
                <CartPopover onClose={() => this.setState({ cartActive: false })} isActive={this.state.cartActive} />
                <nav className="navbar">
                    <span className="navbar-logo">Stevens</span>
                    <span onClick={() => this.setState({ cartActive: !this.state.cartActive })}>
                        <span className="navbar-buttons">Items in cart: {this.props.cart.length || 0} | Total Price: {formatCurrency(this.props.cart.calculateTotalPrice())}</span>
                    </span>
                </nav>
            </div>
        )
    }
}