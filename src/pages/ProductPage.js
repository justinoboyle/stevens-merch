import React, { Component } from 'react';
import {BrowserHistory} from 'react-router';
import RatingsBox from './../components/RatingBox';
import NotFound from './NotFound';
import CartItem from './../cart/CartItem';
import formatCurrency from './../util/formatCurrency';

export default class ProductPage extends Component {
    render() {
            let {category,number,name} = this.props.match.params;
            let item = global._items[category][number];
            this.itemIdentifier = {category,number,name};
            this.item = item;
            console.log(this.itemIdentifier);
        if(item)
            return this.renderPage(item);
        return <NotFound />
    }
    renderPage(item) {
        return (<div className="productPage">
                <div className="columnContainer">
                    <div className="column column-item-left">
                        <div className="column column-inner-left">
                            <img alt={item.name || "..."} src={item.image} className="column-images" />
                            <div className="itemButtons">
                                    <button>Pick Color</button> <button>Pick Size</button>
                            </div>
                        </div>
                    </div>
                    <div className="column column-item-middle">
                        <div className="column-item-middle-inner">
                            <div className="avgStars">{new Array((item.avgRating || 0) + 1).join('★') + `(${item.avgRating}/5)`}</div>
                            <div className="description">
                                <p>
                                    {item.description || item.name}
                                </p>
                                <RatingsBox />
                            </div>
                        </div>
                    </div>
                    <div className="column column-item-right">
                        <div className="column-item-right-inner">
                            <div className="price">{formatCurrency(item.price)} <small>(each)</small></div>
                            {window._cart.containsA(this.itemIdentifier) ? 
                            <div className="alreadyInCart">
                                <p>This item is already in your cart</p>
                                <div>Quantity: <input type="number" onChange={this.handleAmountChange.bind(this)} class="quantity" defaultValue={window._cart.containsA(this.itemIdentifier).amount}></input></div>
                            </div> :
                            <button onClick={() => this.handleCartClick(item)} className="addToCart">Add to Cart</button>
                            }
                            
                            <div className="quantity">{item.quantity}</div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
    handleCartClick() {
        window._cart.push(new CartItem(this.item, this.itemIdentifier, 1));
        window._cart.update();
    }
    getAmountInCart() {
        window._cart.containsA(this.itemIdentifier).amount;
    }
    handleAmountChange(it) {
        let { value } = it.target;
        if(value == 0) {
            // todo remove
        }
        if(value < 0) {
            it.preventDefault();
            it.stopPropagation();
            it.target.value = "1";
            return;
        }
            
        let _item = window._cart.containsA(this.itemIdentifier);
        _item.amount = it.target.value;
        window._cart.update();
    }
}