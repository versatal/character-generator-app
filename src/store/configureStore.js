import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import charactersReducer from '../reducers/characters';
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import profileReducer from '../reducers/profile';

//store creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      characters: charactersReducer,
      filters: filtersReducer,
      auth: authReducer,
      profile: profileReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};