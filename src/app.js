import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore';
import { startSetCharacters } from './actions/characters'
import { login, logout } from './actions/auth';
import getVisibleCharacters from './selectors/characters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { startSetProfile } from './actions/profiles';
import { startAddProfile } from './actions/profiles';

const store = configureStore();

const jsx = (
  <Provider store={store}> 
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;    
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetProfile());
    store.dispatch(startSetCharacters()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
    console.log('id', user.uid);
    
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
    console.log('out');
  }
});
