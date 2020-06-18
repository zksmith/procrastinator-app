export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        mobileSidebarShown: !state.mobileSidebarShown,
      };
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    case 'SET_DISPLAYED_DATA':
      return {
        ...state,
        displayedData: action.payload,
      };
    case 'UPDATE_BOOKMARKS':
      return {
        ...state,
        bookmarks: action.payload,
      };
    case 'SET_USER_ID':
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};
