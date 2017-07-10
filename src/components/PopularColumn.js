import React, { Component } from 'react';

export default class PopularColumn extends Component {
    render() {
        return (
            <div className="popularColumn">
                {this.props.children}
            </div>
        )
    }
}