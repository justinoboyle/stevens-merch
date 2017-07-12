import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbarContainer">
                <nav className="navbar">
                    <span className="navbar-logo">Stevens</span>
                    <span className="navbar-buttons">Items in cart: {this.props.cart.length || 0} | Total Price: {this.props.cart.calculateTotalPrice()}</span>
                </nav>
            </div>
        )
    }
}