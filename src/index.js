import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import './assets/styles/_global.scss';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/pages/home';
import { Header, Footer } from './components/organisms';
import translations from './locale/en/translations';
import flattenMessages from './utils';
import AppRouter from './AppRouter';

ReactDOM.render(
  <BrowserRouter>
    <IntlProvider locale="en" messages={flattenMessages(translations)}>
      <Header />
      <AppRouter />
      <Footer />
    </IntlProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
