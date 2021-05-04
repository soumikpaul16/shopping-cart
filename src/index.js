import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import './assets/styles/_global.scss';
import Header from './components/organisms';
import translations from './locale/en/translations';
import flattenMessages from './utils';

const App = () => <Header />;

ReactDOM.render(
  <IntlProvider locale="en" messages={flattenMessages(translations)}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
