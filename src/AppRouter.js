import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import EnsureLoggedInPath from './components/EnsureLoggedInPath';

import LoginView from './views/LoginView';
import MainPanelView from './views/MainPanelView';
import RegistrationView from './views/RegistrationView';
import SecondPanel from './views/SecondPanelView';


export default class AppRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <EnsureLoggedInPath exact path="/" component={MainPanelView} />
          <EnsureLoggedInPath exact path="/mainpanel" component={MainPanelView} />
          <EnsureLoggedInPath exact path="/secondpanel" component={SecondPanel}/>
          <Route path="/register" component={RegistrationView}/>
          <Route path="/login" component={LoginView}/>
        </div>
      </HashRouter>
    );
  }
}
