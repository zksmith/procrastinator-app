import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { NotificationManager } from 'react-notifications';
import {
  userSignIn,
  registerUser,
  userFetchByToken,
  updateUserBookmarks,
} from '../services/users';

// Initial State
const initialState = {
  displayedData: null,
  mobileSidebarShown: false,
  bookmarks: [],
  userId: null,
  darkmode: localStorage.getItem('darkmode') === 'true' || false,
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

  // Toggle dark mode
  const toggleDarkmode = () => {
    localStorage.setItem('darkmode', !state.darkmode);
    document.getElementsByTagName('body')[0].classList.toggle('darkmode');
    dispatch({
      type: 'TOGGLE_DARKMODE',
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

  const addBookmark = async (bookmarkObj) => {
    const checkBookmark = (bookmark) => bookmark.title === bookmarkObj.title;

    // Only bookmark if user is signedin
    if (state.userId) {
      // shows error and exits function if bookmark already exist
      const bookmarkExist = state.bookmarks.some(checkBookmark);
      if (bookmarkExist) {
        NotificationManager.error('Already bookmarked', 'Bookmarks');
        return;
      }

      const newBookmarks = [
        ...state.bookmarks,
        { ...bookmarkObj, date: new Date() },
      ];
      try {
        const bookmarks = await updateUserBookmarks(state.userId, newBookmarks);
        dispatch({
          type: 'UPDATE_BOOKMARKS',
          payload: bookmarks,
        });
        NotificationManager.success('Post bookmarked', 'Bookmarks');
      } catch (err) {
        console.log(err);
      }
    } else {
      NotificationManager.warning('Sign in to bookmark posts');
    }
  };

  const removeBookmark = async (selectedTitle) => {
    const filteredBookmarks = state.bookmarks.filter(
      (item) => item.title !== selectedTitle
    );

    try {
      const bookmarks = await updateUserBookmarks(
        state.userId,
        filteredBookmarks
      );
      dispatch({
        type: 'UPDATE_BOOKMARKS',
        payload: bookmarks,
      });
      NotificationManager.success('Bookmark removed', 'Bookmarks');
    } catch (err) {
      console.log(err);
    }
  };

  const getUserByToken = async (token) => {
    try {
      const user = await userFetchByToken(token);
      dispatch({
        type: 'SET_USER_ID',
        payload: user.id,
      });
      dispatch({
        type: 'UPDATE_BOOKMARKS',
        payload: JSON.parse(user.bookmarks),
      });
    } catch (err) {
      localStorage.removeItem('token');
    }
  };

  const signIn = async (email, password) => {
    try {
      const { user, new_token } = await userSignIn(email, password);
      dispatch({
        type: 'SET_USER_ID',
        payload: user.id,
      });
      dispatch({
        type: 'UPDATE_BOOKMARKS',
        payload: JSON.parse(user.bookmarks),
      });
      localStorage.setItem('token', new_token);
    } catch (err) {
      NotificationManager.error(err.statusText);
    }
  };

  const register = async (email, password, name) => {
    try {
      const { user, new_token } = await registerUser(email, password, name);
      dispatch({
        type: 'SET_USER_ID',
        payload: user.id,
      });
      dispatch({
        type: 'UPDATE_BOOKMARKS',
        payload: JSON.parse(user.bookmarks),
      });
      localStorage.setItem('token', new_token);
    } catch (err) {
      NotificationManager.error(err.statusText);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        displayedData: state.displayedData,
        mobileSidebarShown: state.mobileSidebarShown,
        bookmarks: state.bookmarks,
        userId: state.userId,
        darkmode: state.darkmode,
        setDisplayedData,
        toggleSidebar,
        toggleDarkmode,
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
