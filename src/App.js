import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './routes/home/Home';

import './App.scss';

/*
todo:
- sækja routes
*/

class App extends Component {
  render() {

    return (

      <div className="App">
        <Helmet defaultTitle="Fyrirlestrar" titleTemplate= %s - Fyrirlestrar" />
    
        <Home />
      </div>
    );
  }
}

export default App;
