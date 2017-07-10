import React, { Component } from 'react';

export default class CategoryBox extends Component {
    render() {
        return (
            <div className="categoryBox" id={"category" + this.props.id}>
                <img src={this.props.image} />
                <h6>{this.props.head || "head"}</h6>
                <small>{this.props.subtext || "subtext"}</small>
            </div>
        )
    }
}