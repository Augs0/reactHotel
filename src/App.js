import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
      </Fragment>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:type" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
