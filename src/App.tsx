import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft, faLayerGroup, faCode } from '@fortawesome/free-solid-svg-icons';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Navbar from 'components/Navbar';

library.add(faArrowRight, faArrowLeft, faLayerGroup, faCode);

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        <Router>
          <Switch>
            <Route path="/registration">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
