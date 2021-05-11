import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/home';
// import Header from './components/organisms';

const AppRouter = () => (
  <Switch>
    <Route path="/signIn" exact component={<></>} />
    <Route path="/register" exact component={<></>} />
    <Route path="/products" exact component={<></>} />
    {/* <Route path="/" exact component={<Home />} /> */}
    {/* will add page not found page */}
    <Redirect from="/*" to="/" />
  </Switch>
);

export default AppRouter;
