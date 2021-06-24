import { REGISTER, LOGIN, SET_IS_AUTHENTICATED, SET_IS_LOADING } from 'store/actionTypes';
import { Action } from 'interface';

const initialState = {
  name: '',
  username: '',
  isAuthenticated: false,
  isLoading: false,
};

const reducer = (state = initialState, action: Action): typeof initialState => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        username: action.payload.username,
        ...(action.payload.name && { name: action.payload.name }),
      };

    case LOGIN:
      return {
        ...state,
        username: action.payload.username,
      };

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };

    default:
      return state;
  }
};

export default reducer;
