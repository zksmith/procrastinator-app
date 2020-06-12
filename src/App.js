import React, { useState, useEffect } from 'react';
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
  Logout,
  Bookmarks,
} from './components';

import './App.css';

function App() {
  const [selected, setSelected] = useState('All Posts');
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    bookmarks: [],
    joined: '',
  });

  /*
    Clears the data before updating the global selected
    Avoids old data being sent when user clicks on sidebar link
  */
  const changeSelected = (string) => {
    if (string !== selected) {
      setData([]);
      setSelected(string);
    }
  };

  const addBookmark = (title, url, source) => {
    if (user.id) {
      fetch('https://noworkdone-api.herokuapp.com/bookmark', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user.id,
          bookmarks: [
            ...user.bookmarks,
            { title, url, source, date: new Date() },
          ],
        }),
      })
        .then((response) => response.json())
        .then((bookmarks) => {
          setUser({
            ...user,
            bookmarks: bookmarks,
          });
        })
        .catch(console.log);
    }
  };

  useEffect(() => {
    // ".replace(/\s/g, '')" is used to remove spaces
    fetch(`https://noworkdone-api.herokuapp.com/${selected.replace(/\s/g, '')}`)
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selected]);

  return (
    <div style={{ display: 'flex' }}>
      <Router>
        <Sidebar selected={selected} changeSelected={changeSelected} />
        <main className='main-section'>
          <Header user={user} />
          <Switch>
            <Route exact path='/'>
              {selected === 'Twitch Streams' ? (
                <StreamsContainer data={data} />
              ) : (
                <Posts
                  data={data}
                  selected={selected}
                  addBookmark={addBookmark}
                />
              )}
            </Route>
            <Route path='/bookmarks'>
              <Bookmarks user={user} />
            </Route>
            <Route path='/signin'>
              <SignIn setUser={setUser} user={user} />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/logout'>
              <Logout setUser={setUser} />
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
