import { ApolloClient, InMemoryCache } from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import AppRouter from './AppRouter';
import './assets/styles/_global.scss';
import { Footer, Header } from './components/organisms';
import translations from './locale/en/translations';
import flattenMessages from './utils';
import { cache, restLink } from './apollo/config';

// Apollo Client Setup
const client = new ApolloClient({
  cache: new InMemoryCache(cache),
  link: restLink,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <IntlProvider locale="en" messages={flattenMessages(translations)}>
        <Header />
        <section className="container">
          <AppRouter />
        </section>
        <Footer />
      </IntlProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
