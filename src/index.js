import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import CartSetup from './cart/CartSetup';

window._cart = CartSetup();

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
