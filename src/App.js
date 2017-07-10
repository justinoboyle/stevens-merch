import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ProductPage />
      </div>
    );
  }
}

export default App;
