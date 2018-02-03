import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import VaultDashboardPage from '../components/VaultDashboardPage';
import AddCharacterPage from '../components/AddCharacterPage';
import ViewCharacterPage from '../components/ViewCharacterPage';
import EditCharacterPage from '../components/EditCharacterPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={VaultDashboardPage} exact={true}/>
        <Route path="/create" component={AddCharacterPage} />
        <Route path="/edit/:id" component={EditCharacterPage} />
        <Route path="/view/:id" component={ViewCharacterPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>  
)

export default AppRouter;