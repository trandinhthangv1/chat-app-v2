import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
