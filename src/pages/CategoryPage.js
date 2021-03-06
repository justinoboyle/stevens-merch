import React, { Component } from 'react';
import ProductBox from './../components/ProductBox';
import generateProductBox from './../util/generateProductBox'
import NotFound from './NotFound';

export default class CategoryPage extends Component {
    render() {
            let {category} = this.props.match.params;
            let _categoryObject = global._items[category];
        if(category)
            return this.renderPage(category, _categoryObject);
        return <NotFound />
    }
    renderPage(category, _categoryObject) {
        return (
            <div class="pageContainer">
                <h1 className="pageHeader">Campus Store</h1>
                <div className="categoryPage">
                        {Object.keys(_categoryObject).map((name,k) => {
                            return <span key={k + name}>{<ProductBox {...generateProductBox(category, name, _categoryObject[name])} />}</span>
                        })}
                </div>
            </div>
        );
    }
}