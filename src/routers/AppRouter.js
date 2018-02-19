import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CharacterDashboardPage from '../components/CharacterDashboardPage';
import AddCharacterPage from '../components/AddCharacterPage';
import EditCharacterPage from '../components/EditCharacterPage';
import UserProfile from '../components/UserProfile';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={CharacterDashboardPage}/>
        <PrivateRoute path="/create" component={AddCharacterPage} />
        <PrivateRoute path="/edit/:id" component={EditCharacterPage} />
        <PrivateRoute path="/profile" component={UserProfile} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>  
)

export default AppRouter;