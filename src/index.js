import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import './assets/styles/_global.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/organisms';
import translations from './locale/en/translations';
import flattenMessages from './utils';
import AppRouter from './AppRouter';

const App = () => <Header />;

ReactDOM.render(
  <BrowserRouter>
    <IntlProvider locale="en" messages={flattenMessages(translations)}>
      <AppRouter />
      <App />
    </IntlProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
