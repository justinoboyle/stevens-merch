import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import items from './items/items.json';
import Main from './Main';
global._items = items;

let _allItems = [];
for(let x in global._items) {
  for(let it of global._items[x])
    _allItems.push(it);
}
global._items["allItems"] = _allItems;



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
