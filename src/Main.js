import React,{Component} from 'react';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom'; 
import ProductPage from './pages/ProductPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={CategoriesPage} />
          <Route exact path='/category/:category' component={CategoryPage} />
          <Route exact path='/item/:category/:number/:name' component={ProductPage} />
          <Route path="/" render={() => <div>Wtf</div>} />
        </Switch>
      </div>
    );
  }
}
