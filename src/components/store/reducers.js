import {
  TITLE,
  SAVED_REQUESTS,
  SEARCH_VALUE,
  STATE,
  VIDEO,
  INPUT_VALUE
} from './actions';

const initialState = {
  title: '',
  searchValue: '',
  video: [],
  savedRequests: [],
  state: true,
  inputValue: 25
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TITLE:
      return {
        ...state,
        title: action.payload
      };
    case SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    case VIDEO:
      return {
        ...state,
        video: action.payload
      };
    case SAVED_REQUESTS:
      return {
        ...state,
        savedRequests: action.payload
      };
    case STATE:
      return {
        ...state,
        state: action.payload
      };
    case INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      };

    default:
      return state;
  }
};
