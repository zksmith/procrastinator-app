export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        mobileSidebarShown: !state.mobileSidebarShown,
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
