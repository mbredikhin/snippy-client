import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';
import reducer from 'store/reducer';
import { Action } from 'interface';

const store = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, Action>;

export default store;
