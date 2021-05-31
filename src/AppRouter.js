import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Home, Register, SignIn, Products,
} from './components/pages';

const AppRouter = () => (
  <Switch>
    <Route path="/signIn" exact render={(props) => <SignIn {...props} />} />
    <Route path="/register" exact render={(props) => <Register {...props} />} />
    <Route path="/products" render={(props) => <Products {...props} />} />
    <Route path="/" render={(props) => <Home {...props} />} />
    {/* will add page not found page */}
    <Redirect from="/*" to="/" />
  </Switch>
);

export default AppRouter;
