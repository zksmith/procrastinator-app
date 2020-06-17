export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        mobileSidebarShown: !state.mobileSidebarShown,
      };
    default:
      return state;
  }
};
