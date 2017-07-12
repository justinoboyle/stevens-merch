import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './../style/ProductBox.css';
import formatCurrency from './../util/formatCurrency';

export default class ProductBox extends Component {
    render() {
        return (    
            <div className="productBox" id={"product" + this.props.id}>
                <Link className="productBox-link" to={`/item/${this.props.category}/${this.props.id}/${this.props.innerName}`}>
                    <img className="productBox-image" src={this.props.image} />
                    <h2 className="productBox-name">{this.props.serializedName || "head"}</h2>
                    <small className="price">{formatCurrency(this.props.price || 0)}</small>
                </Link>
            </div>
        )
    }
}