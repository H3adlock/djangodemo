import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route path="/order" component={Order} />
      <Footer />

    </div>
  );
}

export default App;
