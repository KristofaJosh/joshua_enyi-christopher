import React, {useState} from 'react';
import {StyleProvider} from "../context";
import {siteColors} from "./siteColors";


const ConstantProvider = ({children}) => {
    const [isOpen, setNav] = useState(false);
    
    
    const Constant = {
        navState: isOpen,
        toggleNav: () => {setNav(!isOpen)},
        siteColors,
    };
    
    
    return (
        <StyleProvider value={Constant}>
            {children}
        </StyleProvider>
    );
};

export default ConstantProvider;