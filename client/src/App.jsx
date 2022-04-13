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
      <Route path='/' exact>
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default App;
