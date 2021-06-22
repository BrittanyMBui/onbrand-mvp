import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import App from './App';


const httpLink = new HttpLink({
    uri: 'http://localhost:4000'
})

const authLink = setContext(() => {
    const token = localStorage.getItem('token');
    return {
        header : {
            Authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default (
<ApolloProvider client={client}>
    <App />
</ApolloProvider>
)