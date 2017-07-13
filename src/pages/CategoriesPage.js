import React, { Component } from 'react';
import generateCategoryBox from './../util/generateCategoryBox';
import CategoryBox from './../components/CategoryBox';


export default class CategoriesPage extends Component {
    render() {
        return (
            <div className="pageContainer">
                <h1 className="pageHeader">Campus Store</h1>
                <p className="subHeader">​Stevens Institute of Technology is a premier, private <br /> research university situated in Hoboken, New Jersey,<br /> overlooking the Manhattan skyline.</p>
                <div className="categoriesPage">
                        {Object.keys(window._items).map((name,k) => {
                            return <span key={k + name}>{window._items[name].length > 0 ? <CategoryBox {...generateCategoryBox(name, window._items[name])} /> : ""}</span>
                        })}
                </div>
            </div>
        )
    }
}