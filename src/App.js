import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import UserPage from './containers/UserPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:userName' component={UserPage} />
        <Redirect to="/camunda" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
