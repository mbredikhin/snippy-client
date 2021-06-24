import { ISignInInput, ISignUpInput, Action } from 'interface';
import { REGISTER, LOGIN, SET_IS_LOADING, SET_IS_AUTHENTICATED } from 'store/actionTypes';
import { apiService } from 'services';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

export const register = (payload: ISignUpInput): ThunkAction<void, RootState, unknown, Action> => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    await apiService.signUp(payload);
    dispatch(setIsLoading(false));
    dispatch(setIsAuthenticated(true));
    dispatch({
      type: REGISTER,
      payload,
    });
  };
};

export const login = (payload: ISignInInput): ThunkAction<void, RootState, unknown, Action> => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    await apiService.signIn(payload);
    dispatch(setIsLoading(false));
    dispatch(setIsAuthenticated(true));
    dispatch({
      type: LOGIN,
      payload,
    });
  };
};

export const setIsLoading = (isLoading: boolean): Action => ({
  type: SET_IS_LOADING,
  payload: { isLoading },
});

export const setIsAuthenticated = (isAuthenticated: boolean): Action => ({
  type: SET_IS_AUTHENTICATED,
  payload: { isAuthenticated },
});
