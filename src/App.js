import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Sidebar, Main, UserForm } from './components';

import './App.css';

function App() {
  const [globalSelected, setGlobalSelected] = useState('All Posts');

  return (
    <div style={{ display: 'flex' }}>
      <Router>
        <Sidebar
          globalSelected={globalSelected}
          setGlobalSelected={setGlobalSelected}
        />
        <Switch>
          <Route exact path='/'>
            <Main globalSelected={globalSelected} />
          </Route>
          <Route path='/bookmarks'>
            <Main globalSelected={'Bookmarks'} />
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
