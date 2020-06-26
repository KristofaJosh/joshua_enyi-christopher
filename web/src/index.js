import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from "./helpers/errorboundary";
import ConstantProvider from "./UI/constants";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: 'http://localhost:3500/graphql'
});


ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <ConstantProvider>
                <ApolloProvider client={client}>
                    <App/>
                </ApolloProvider>
            </ConstantProvider>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
