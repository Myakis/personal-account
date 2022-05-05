import {} from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducer/auth-reducer';
import userReducer from './reducer/user-reducer';

let rootReducer = combineReducers({
  auth: authReducer,
  usersPage: userReducer,
});

export type StateType = ReturnType<typeof rootReducer>;

//Для работоспособности расширения redux devTools
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
