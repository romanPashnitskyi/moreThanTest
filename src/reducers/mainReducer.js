const mainReducer = (state = {
  name: '',
  message: false,
  error: null
}, action) => {
  switch (action.type) {
    case 'FETCH_DATA_FULFILLED':
      state = {
        ...state,
        name: action.payload.name,
        message: action.payload.message,
        error: action.payload.error
      };
      break;
    default:
      break;
  }
  return state;
};

export default mainReducer;
