import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { cache, restLink } from './apollo/config';
import './assets/styles/_global.scss';
import Layout from './components/Layout';
import translations from './locale/en/translations';
import flattenMessages from './utils';

// Apollo Client Setup
const client = new ApolloClient({
  cache: new InMemoryCache(cache),
  link: restLink,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <IntlProvider locale="en" messages={flattenMessages(translations)}>
        <Layout />
      </IntlProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
