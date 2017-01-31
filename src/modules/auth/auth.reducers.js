export const auth  = (state = false, action) => {
  switch (action.type) {
    case 'RESET_AUTH':
      return false;
    case 'IS_AUTH':
      return action.value;
    default:
      return state
  }
};
