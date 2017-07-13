import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './../style/ProductBox.css';
import formatCurrency from './../util/formatCurrency';

export default class ProductBox extends Component {
    render() {
        return (    
            <div className="productBox" id={"product" + this.props.id}>
                <Link className="productBox-link" to={`/item/${this.props.category}/${this.props.id}/${this.props.innerName}`}>
                    <h2 className="productBox-price">{formatCurrency(this.props.price || 0)}</h2>
                    <img alt={this.props.serializedName} className="productBox-image" src={this.props.image} />
                </Link>
            </div>
        )
    }
}