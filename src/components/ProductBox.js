import React, { Component } from 'react';

export default class ProductBox extends Component {
    render() {
        return (
            <div className="productBox" id={"product" + this.props.id}>
                <img src={this.props.image} />
                <h6>{this.props.head || "head"}</h6>
                <small>{this.props.subtext || "subtext"}</small>
                <div className="price">{this.props.price || "0"}</div>
            </div>
        )
    }
}