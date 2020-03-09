import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'
import ProductPage from './pages/ProductPage'
import Error from './pages/Error'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shopping-cart" component={ShoppingCart}/>
          <Route path="/product/:id" component={ProductPage}/>
          <Route path="*" component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
