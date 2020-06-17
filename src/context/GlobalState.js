import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  mobileSidebarShown: false,
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

  return (
    <GlobalContext.Provider
      value={{
        mobileSidebarShown: state.mobileSidebarShown,
        toggleSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
