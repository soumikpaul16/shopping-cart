import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import './assets/styles/_global.scss';
import { Footer, Header } from './components/organisms';
import translations from './locale/en/translations';
import flattenMessages from './utils';

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
