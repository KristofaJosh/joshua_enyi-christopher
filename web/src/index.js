import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from "./helpers/errorboundary";
import ConstantProvider from "./UI/constants";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from '@apollo/react-hooks';

let URL = process.env.NODE_ENV === "development" ? "http://localhost:8080/graphql" : process.env.REACT_APP_API_ROUTE+'/graphql';


const client = new ApolloClient({
    uri: URL
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
