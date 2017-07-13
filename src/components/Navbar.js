import React, { Component } from 'react';
import formatCurrency from './../util/formatCurrency';
import CartPopover from './../popover/CartPopover';
import nav_logo from './../img/logo.png';

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
                    <img alt="Navbar logo" src={nav_logo} className="navbar-logo" />
                    <span onClick={() => this.setState({ cartActive: !this.state.cartActive })}>
                        <span className="navbar-buttons">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            {
                                !(this.props.cart.length > 0) ||
                                <span>
                                    <span className="badge">
                                        {this.props.cart.length || 0}
                                    </span>
                                    <span className="totalPrice">
                                        {formatCurrency(this.props.cart.calculateTotalPrice())}
                                    </span>
                                </span>
                            }
                            
                        </span>
                    </span>
                </nav>
            </div>
        )
    }
}