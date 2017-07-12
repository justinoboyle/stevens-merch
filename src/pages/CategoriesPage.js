import React, { Component } from 'react';
import generateCategoryBox from './../util/generateCategoryBox';
import CategoryBox from './../components/CategoryBox';

export default class CategoriesPage extends Component {
    render() {
        return (
            <div className="categoriesPage">
                {Object.keys(window._items).map((name,k) => {
                    return <span key={k + name}>{window._items[name].length > 0 ? <CategoryBox {...generateCategoryBox(name, window._items[name])} /> : "small"}</span>
                })}
            </div>
        )
    }
}