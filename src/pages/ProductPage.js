import React, { Component } from 'react';
import RatingsBox from './../components/RatingBox';

export default class ProductPage extends Component {
    render() {
        return (
            <div className="productPage">
                <div className="column">
                    <div className="avgStars">{this.props.averageStars}</div>
                    <img alt={this.props.name || "..."} src={this.props.image} className="column-images" />
                    <button>Pick Color</button> <button>Pick Size</button>
                    <div className="description">
                        <p>
                            {this.props.description}
                        </p>
                        <RatingsBox />
                    </div>
                </div>
                <div className="column">
                    <div className="price">{this.props.price}</div>
                    <button className="addToCart">Add to Cart</button>
                    <div className="quantity">{this.props.quantity}</div>
                </div>
            </div>
        )
    }
}