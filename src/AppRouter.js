import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/home';
// import Header from './components/organisms';

const AppRouter = () => (
  <Switch>
    <Route path="/signIn" exact render={(props) => <Home {...props} />} />
    <Route path="/register" exact render={(props) => <Home {...props} />} />
    <Route path="/products" exact render={(props) => <Home {...props} />} />
    <Route path="/" render={(props) => <Home {...props} />} />
    {/* will add page not found page */}
    <Redirect from="/*" to="/" />
  </Switch>
);

export default AppRouter;
