import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import items from './items/items.json';
import Main from './Main';
global._items = items;



class App extends Component {
  render() {
    if (!this.registered) {
      window._registerCartUpdateListener(() => {
        this.forceUpdate();
      })
      this.registered = true;
    }
    return (
      <div className="App">
        <Navbar cart={window._cart} />
        <Main />
      </div>
    );
  }
}

export default App;
