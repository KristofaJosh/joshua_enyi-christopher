import React, {useEffect, useReducer} from 'react';
import {StyleProvider} from "../context";
import {siteColors} from "./siteColors";
import GraphQLFunctions from "./queries";


const ConstantProvider = ({children}) => {
    
    const initialState = JSON.parse(localStorage.getItem('initialState')) ||
        {
            worksData: [],
            isOpen: false,
            inView: [],
            token: '',
            isAuthenticated: false,
            form: {}
        };
    
    
    function reducer(state, action) {
        switch (action.type) {
            case 'setWorks':
                return {...state, worksData: action.data};
            case 'getWork':
                return {...state, inView: state.worksData[action.id]};
            case 'toggleNav':
                return {...state, isOpen: !state.isOpen};
            case 'setForm':
                return {...state, form: action.data};
            case 'setContact':
                return {...state, contact: action.data};
            case 'setToken':
                return {...state, token: action.data.token, isAuthenticated: action.data.state};
            case 'clearToken':
                return {...state, token: '', isAuthenticated: false};
            default:
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
        //cache state
        localStorage.setItem('initialState', JSON.stringify(state));
    }, [initialState, state]);
    
    const Constant = {
        siteColors,
        store: state,
        dispatch: dispatch,
        Queries: GraphQLFunctions.Queries,
        Mutations: GraphQLFunctions.Mutations
    };
    
    return (
        <StyleProvider value={Constant}>
            {children}
        </StyleProvider>
    );
};

export default ConstantProvider;