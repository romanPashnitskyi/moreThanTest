const mainReducer = (state = {
  name: '',
  message: false,
  error: null
}, action) => {
  switch (action.type) {
    case 'FETCH_DATA_FULFILLED':
      state = {
        ...state,
        name: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default mainReducer;
