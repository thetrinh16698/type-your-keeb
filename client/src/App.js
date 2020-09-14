import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import GameMenu from './components/GameMenu';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={GameMenu}></Route>
      </Switch>
    </Router>
  );
}

export default App;
