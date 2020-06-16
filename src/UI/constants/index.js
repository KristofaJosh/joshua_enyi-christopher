import React, {useReducer} from 'react';
import {StyleProvider} from "../context";
import {siteColors} from "./siteColors";


const ConstantProvider = ({children}) => {
    const initialState = {worksData: [], isOpen: false, inView: []};
    
    function reducer(state, action) {
        switch (action.type) {
            case 'setWorks':
                return {...state, worksData: action.data};
            case 'getWork':
                return {...state, inView: state.worksData[action.id]};
            case 'toggleNav':
                return {...state, isOpen: !state.isOpen};
            default:
                return state;
        }
    }
    
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const Constant = {
        siteColors,
        store: state,
        dispatch: dispatch,
    };
    
    
    return (
        <StyleProvider value={Constant}>
            {children}
        </StyleProvider>
    );
};

export default ConstantProvider;