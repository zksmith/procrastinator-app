import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  Sidebar,
  UserForm,
  Header,
  Posts,
  StreamsContainer,
} from './components';

import './App.css';

function App() {
  const [selected, setSelected] = useState('All Posts');
  const [data, setData] = useState([]);

  /*
    Clears the data before updating the global selected
    Avoids old data being sent when user clicks on sidebar link
  */
  const changeSelected = (string) => {
    setData([]);
    setSelected(string);
  };

  useEffect(() => {
    if (!selected !== 'Bookmarks') {
      // ".replace(/\s/g, '')" is used to remove spaces
      fetch(
        `https://noworkdone-api.herokuapp.com/${selected.replace(/\s/g, '')}`
      )
        .then((response) => response.json())
        .then((apiData) => {
          setData(apiData);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setData([{ title: 'TODO' }]);
    }
  }, [selected]);

  return (
    <div style={{ display: 'flex' }}>
      <Router>
        <Sidebar selected={selected} changeSelected={changeSelected} />
        <main className='main-section'>
          <Header />
          <Switch>
            <Route exact path='/'>
              {selected === 'Twitch Streams' ? (
                <StreamsContainer data={data} />
              ) : (
                <Posts data={data} selected={selected} />
              )}
            </Route>
            {/* <Route path='/bookmarks'>
            <Main selected={'Bookmarks'} />
          </Route> */}
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
        </main>
      </Router>
    </div>
  );
}

export default App;
