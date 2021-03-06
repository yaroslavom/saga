import { applyMiddleware, combineReducers, createStore } from "redux";
import countReducer from './countReducer';
import userReducer from './userReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatchers } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ countReducer, userReducer});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatchers)