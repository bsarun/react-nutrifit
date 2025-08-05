export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AppState {
  users: User[];
  loading: boolean;
  error: string | null;
  language: string;
}

export interface RootState {
  app: AppState;
}

export interface FetchUsersAction {
  type: 'FETCH_USERS_REQUEST';
}

export interface FetchUsersSuccessAction {
  type: 'FETCH_USERS_SUCCESS';
  payload: User[];
}

export interface FetchUsersFailureAction {
  type: 'FETCH_USERS_FAILURE';
  payload: string;
}

export interface SetLanguageAction {
  type: 'SET_LANGUAGE';
  payload: string;
}

export type AppActions = 
  | FetchUsersAction 
  | FetchUsersSuccessAction 
  | FetchUsersFailureAction
  | SetLanguageAction;