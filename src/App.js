import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Track from './components/Track/Track';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route path="/track" component={Track} />
      <Footer />

    </div>
  );
}

export default App;
