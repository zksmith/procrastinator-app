import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { NotificationManager } from 'react-notifications';

// Initial State
const initialState = {
  displayedData: [],
  mobileSidebarShown: false,
  bookmarks: [],
  userId: null,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const toggleSidebar = () => {
    dispatch({
      type: 'TOGGLE_SIDEBAR',
    });
  };

  const setDisplayedData = (data) => {
    dispatch({
      type: 'SET_DISPLAYED_DATA',
      payload: data,
    });
  };

  const logOut = () => {
    dispatch({
      type: 'SET_USER_ID',
      payload: null,
    });
    dispatch({
      type: 'UPDATE_BOOKMARKS',
      payload: [],
    });
    localStorage.removeItem('token');
    NotificationManager.info('Signed Out');
  };

  const addBookmark = (bookmarkObj) => {
    const checkBookmark = (bookmark) => bookmark.title === bookmarkObj.title;

    if (state.userId) {
      // shows error and exits function if bookmark already exist
      const bookmarkExist = state.bookmarks.some(checkBookmark);
      if (bookmarkExist) {
        NotificationManager.error('Already bookmarked', 'Bookmarks');
        return;
      }

      fetch('https://procrastinator-api.herokuapp.com/bookmark', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: state.userId,
          bookmarks: [...state.bookmarks, { ...bookmarkObj, date: new Date() }],
        }),
      })
        .then((response) => response.json())
        .then((bookmarks) => {
          dispatch({
            type: 'UPDATE_BOOKMARKS',
            payload: bookmarks,
          });
          NotificationManager.success('Post bookmarked', 'Bookmarks');
        })
        .catch(console.log);
    } else {
      NotificationManager.warning('Sign in to bookmark posts');
    }
  };

  const removeBookmark = (title) => {
    const filteredBookmarks = state.bookmarks.filter(
      (item) => item.title !== title
    );
    if (state.userId) {
      fetch('https://procrastinator-api.herokuapp.com/bookmark', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: state.userId,
          bookmarks: filteredBookmarks,
        }),
      })
        .then((response) => response.json())
        .then((bookmarks) => {
          dispatch({
            type: 'UPDATE_BOOKMARKS',
            payload: bookmarks,
          });
          NotificationManager.success('Bookmark removed', 'Bookmarks');
        })
        .catch(console.log);
    }
  };

  const getUserByToken = (token) => {
    fetch('https://procrastinator-api.herokuapp.com/user', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((user) => {
        dispatch({
          type: 'SET_USER_ID',
          payload: user.id,
        });
        dispatch({
          type: 'UPDATE_BOOKMARKS',
          payload: JSON.parse(user.bookmarks),
        });
      })
      .catch((err) => {
        window.localStorage.removeItem('token');
      });
  };

  const signIn = (email, password) => {
    fetch('https://procrastinator-api.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then(({ user, new_token }) => {
        if (user.id) {
          dispatch({
            type: 'SET_USER_ID',
            payload: user.id,
          });
          dispatch({
            type: 'UPDATE_BOOKMARKS',
            payload: JSON.parse(user.bookmarks),
          });
          window.localStorage.setItem('token', new_token);
        }
      })
      .catch((err) => console.log(err));
  };

  const register = (email, password, name) => {
    fetch('https://procrastinator-api.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((response) => response.json())
      .then(({ user, new_token }) => {
        if (user.id) {
          dispatch({
            type: 'SET_USER_ID',
            payload: user.id,
          });
          dispatch({
            type: 'UPDATE_BOOKMARKS',
            payload: JSON.parse(user.bookmarks),
          });
          window.localStorage.setItem('token', new_token);
        }
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        displayedData: state.displayedData,
        mobileSidebarShown: state.mobileSidebarShown,
        bookmarks: state.bookmarks,
        userId: state.userId,
        setDisplayedData,
        toggleSidebar,
        addBookmark,
        removeBookmark,
        getUserByToken,
        signIn,
        register,
        logOut,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
