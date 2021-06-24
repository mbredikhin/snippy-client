import { LOGIN, REGISTER, SET_IS_AUTHENTICATED, SET_IS_LOADING } from 'store/actionTypes';

export interface ISignUpInput {
  name?: string;
  username: string;
  password: string;
}

export interface ISignInInput {
  username: string;
  password: string;
}

export interface IList {
  id: number;
  name: string;
}

export interface ISnippet {
  id?: number;
  list_id?: number;
  name: string;
  syntax_id: number;
  content?: string;
}

export interface ITag {
  id?: number;
  name: string;
}

export type loginAction = {
  type: typeof LOGIN;
  payload: ISignInInput;
};

export type registerAction = {
  type: typeof REGISTER;
  payload: ISignUpInput;
};

export type setIsLoadingAction = {
  type: typeof SET_IS_LOADING;
  payload: {
    isLoading: boolean;
  };
};

export type setIsAuthenticatedAction = {
  type: typeof SET_IS_AUTHENTICATED;
  payload: {
    isAuthenticated: boolean;
  };
};

export type Action = loginAction | registerAction | setIsLoadingAction | setIsAuthenticatedAction;
