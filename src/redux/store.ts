import { useDispatch } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducer/user-reducer';

let rootReducer = combineReducers({
  usersPage: userReducer,
});

type AppRootReducer = typeof rootReducer;
export type StateType = ReturnType<AppRootReducer>;

//Для работоспособности расширения redux devtools
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
