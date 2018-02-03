import { createStore, combineReducers } from 'redux';
import charactersReducer from '../reducers/characters';
import filtersReducer from '../reducers/filters'

//store creation

export default () => {
  const store = createStore(
    combineReducers({
      characters: charactersReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};