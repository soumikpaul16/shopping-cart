import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Register, SignIn } from './components/pages';

const AppRouter = () => (
  <Switch>
    <Route path="/login" exact render={(props) => <SignIn {...props} />} />
    <Route path="/register" exact render={(props) => <Register {...props} />} />
    <Route path="/products" exact render={(props) => <Home {...props} />} />
    <Route path="/" render={(props) => <Home {...props} />} />
    {/* will add page not found page */}
    <Redirect from="/*" to="/" />
  </Switch>
);

export default AppRouter;
