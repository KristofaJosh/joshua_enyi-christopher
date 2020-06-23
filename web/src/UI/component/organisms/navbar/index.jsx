import React, {useContext} from 'react';
import styled from "styled-components";
import Hamburger from "../../molecules/hamburger";
import StyleContext from "../../../context";
import Navigations from "../../molecules/navigation";
import {Link} from "react-router-dom";

const NavBar = () => {
    const {siteColors, dispatch, store:{isOpen}} = useContext(StyleContext);
    
    return (
        <>
            <Navigations isOpen={isOpen} toggleNav={()=>dispatch({type:'toggleNav'})} {...siteColors}/>
            <Styling {...siteColors} isOpen={isOpen}>
                <Link to={'/'}>
                    <div className={'box'}>
                        {isOpen ? <img style={{width: '100%'}} src={"/assets/images/logo_w.png"} alt=""/> :
                            <img style={{width: '100%'}} src={"/assets/images/logo_b.png"} alt=""/>
                        }
                    </div>
                </Link>
                <div className={'box'}>
                    <Hamburger isOpen={isOpen} onClick={()=>dispatch({type:'toggleNav'})} {...siteColors}/>
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
z-index: 10;
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