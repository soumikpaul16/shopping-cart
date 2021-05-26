import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
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
  <BrowserRouter>
    <IntlProvider locale="en" messages={flattenMessages(translations)}>
      <ApolloProvider client={client}>
        <Layout />
      </ApolloProvider>
    </IntlProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
