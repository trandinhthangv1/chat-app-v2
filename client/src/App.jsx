import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';

const App = () => {
  return (
    <Switch>
      <Route path='/chat'>
        <ChatPage />
      </Route>
      <Route path='/'>
        <LoginPage />
      </Route>
      <Route path='*'>
        <h2>Page Not Found</h2>
      </Route>
    </Switch>
  );
};

export default App;
