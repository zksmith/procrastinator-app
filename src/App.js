import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Sidebar, Main, UserForm } from './components';

import './App.css';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Main selected='All Posts' />
          </Route>
          <Route path='/bookmarks'>
            <Main selected='Bookmarks' />
          </Route>
          <Route path='/signin'>
            <UserForm type='signin' />
          </Route>
          <Route path='/register'>
            <UserForm type='register' />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
