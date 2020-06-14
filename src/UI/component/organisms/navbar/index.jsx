import React, {useContext} from 'react';
import styled from "styled-components";
import Hamburger from "../../molecules/hamburger";
import StyleContext from "../../../context";
import Navigations from "../../molecules/navigation";

const NavBar = () => {
    const {siteColors, toggleNav, navState} = useContext(StyleContext);
    
    return (
        <>
            <Navigations isOpen={navState} toggleNav={toggleNav} {...siteColors}/>
            <Styling {...siteColors} isOpen={navState}>
                <div className={'box'}>
                    {navState ? <img style={{width: '100%'}} src={"/assets/images/logo_w.png"} alt=""/> :
                        <img style={{width: '100%'}} src={"/assets/images/logo_b.png"} alt=""/>
                    }
                </div>
                <div className={'box'}>
                    <Hamburger isOpen={navState} onClick={toggleNav} {...siteColors}/>
                </div>
            </Styling>
        </>
    );
};

const Styling = styled.nav`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
left: 0;
z-index: 5;
// background: red;

.box {
    background: ${props => props.isOpen ? 'transparent' : props.white};
    padding: 0.3rem 1rem;
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
}

`;

export default NavBar;