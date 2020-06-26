import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  Sidebar,
  Register,
  SignIn,
  Header,
  Posts,
  StreamsContainer,
  Bookmarks,
} from './components';

import { NotificationContainer } from 'react-notifications';

import './App.css';
import 'react-notifications/lib/notifications.css';

function App() {
  const { getUserByToken, setDisplayedData, darkmode, userId } = useContext(
    GlobalContext
  );

  const [selected, setSelected] = useState('All Posts');

  useEffect(() => {
    // get user info if token is present
    if (window.localStorage.getItem('token') && !userId) {
      getUserByToken(window.localStorage.getItem('token'));
    }

    if (darkmode) {
      document.getElementsByTagName('body')[0].classList.add('darkmode');
    }

    // eslint-disable-next-line
  }, []);

  // useEffect to handle data requests
  useEffect(() => {
    let isCancelled = false;
    setDisplayedData([]);

    // ".replace(/\s/g, '')" is used to remove spaces
    fetch(
      `https://procrastinator-api.herokuapp.com/${selected.replace(/\s/g, '')}`
    )
      .then((response) => response.json())
      .then((apiData) => {
        if (!isCancelled) {
          setDisplayedData(apiData);
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.log(err);
        }
      });

    //cleanup
    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line
  }, [selected]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Router>
          <Sidebar selected={selected} changeSelected={setSelected} />
          <main className='main-section'>
            <Header />
            <Switch>
              <Route exact path='/'>
                {selected === 'Twitch Streams' ? (
                  <StreamsContainer />
                ) : (
                  <Posts selected={selected} />
                )}
              </Route>
              <Route path='/bookmarks'>
                <Bookmarks />
              </Route>
              <Route path='/signin'>
                <SignIn />
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
              <Route path='*'>
                <Redirect to='/' />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
      <NotificationContainer />
    </>
  );
}

export default App;
