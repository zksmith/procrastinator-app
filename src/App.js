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

import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

import './App.css';
import 'react-notifications/lib/notifications.css';

function App() {
  const [mobileSidebar, showMobileSidebar] = useState(false);
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

  const addBookmark = (title, url, source, commentsUrl) => {
    const checkBookmark = (bookmark) => bookmark.title === title;

    if (user.id) {
      // shows error and exits if bookmark already exist
      const bookmarkExist = user.bookmarks.some(checkBookmark);
      if (bookmarkExist) {
        NotificationManager.error('Already bookmarked', 'Bookmarks');
        return;
      }

      fetch('https://procrastinator-api.herokuapp.com/bookmark', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user.id,
          bookmarks: [
            ...user.bookmarks,
            { title, url, source, commentsUrl, date: new Date() },
          ],
        }),
      })
        .then((response) => response.json())
        .then((bookmarks) => {
          setUser({
            ...user,
            bookmarks: bookmarks,
          });
          NotificationManager.success('Post bookmarked', 'Bookmarks');
        })
        .catch(console.log);
    } else {
      NotificationManager.warning('Sign in to bookmark posts');
    }
  };

  const removeBookmark = (title) => {
    const filteredBookmarks = user.bookmarks.filter(
      (item) => item.title !== title
    );
    if (user.id) {
      fetch('https://procrastinator-api.herokuapp.com/bookmark', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user.id,
          bookmarks: filteredBookmarks,
        }),
      })
        .then((response) => response.json())
        .then((bookmarks) => {
          setUser({
            ...user,
            bookmarks: bookmarks,
          });
          NotificationManager.success('Bookmark removed', 'Bookmarks');
        })
        .catch(console.log);
    }
  };

  const toggleMobileSidebar = () => showMobileSidebar(!mobileSidebar);

  useEffect(() => {
    let isCancelled = false;

    if (!user.id && window.localStorage.getItem('token')) {
      fetch('https://procrastinator-api.herokuapp.com/user', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })
        .then((response) => response.json())
        .then((user) => {
          setUser({
            ...user,
            bookmarks: JSON.parse(user.bookmarks),
          });
        })
        .catch((err) => {
          window.localStorage.removeItem('token');
        });
    }

    // ".replace(/\s/g, '')" is used to remove spaces
    fetch(
      `https://procrastinator-api.herokuapp.com/${selected.replace(/\s/g, '')}`
    )
      .then((response) => response.json())
      .then((apiData) => {
        if (!isCancelled) {
          setData(apiData);
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
  }, [selected, user.id]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Router>
          <Sidebar
            selected={selected}
            changeSelected={changeSelected}
            showMobile={mobileSidebar}
          />
          <main className='main-section'>
            <Header user={user} toggleMobileSidebar={toggleMobileSidebar} />
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
                <Bookmarks user={user} removeBookmark={removeBookmark} />
              </Route>
              <Route path='/signin'>
                <SignIn setUser={setUser} user={user} />
              </Route>
              <Route path='/register'>
                <Register setUser={setUser} user={user} />
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
      <NotificationContainer />
    </>
  );
}

export default App;
