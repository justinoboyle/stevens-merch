import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './../style/CategoryBox.css';

export default class CategoryBox extends Component {
    render() {
        return (    
            <div className="categoryBox" id={"category" + this.props.id}>
                <Link className="categoryBox-link" to={`/category/${this.props.innerName}`}>
                <h2 className="categoryBox-name">{this.props.serializedName || "head"}</h2>
                    <img className="categoryBox-image" src={this.props.image} />
                    {/*<small>{this.props.itemCount} items available for sale!</small>*/}
                </Link>
            </div>
        )
    }
}
///${this.props.id}/${this.props.name.toLowerCase().replace(new RegExp(' ', 'g'), '-')}