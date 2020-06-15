import React from 'react';
import styled from "styled-components";
import {useLocation, useHistory} from 'react-router-dom';
import {siteColors} from "../../constants/siteColors";
import Footer from "../../component/organisms/footer";


const ContentTemplate = ({children}) => {
    
    const {pathname} = useLocation();
    const {goBack} = useHistory();
    
    
    return (
        <Styling {...siteColors}>
            <span className={'page-name'}>{pathname.replace('/','')}</span>
            <div className="content">
                {children}
            </div>
    
            <div className="footer">
                {/*<Footer mobile/>*/}
            </div>
            
            <div className="scroll" onClick={goBack}>
                <p>go back</p>
                <span className={'line'}/>
            </div>
        </Styling>
    );
};

const Styling = styled.div`
width: 100%;
min-height: 100%;

background: ${props=>props.white};

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.content {
    margin: 4.3em 2.5em;
    max-width: 60%;
    width: 100%;
    max-height: 80%;
}


.page-name {
    position: absolute;
    transform: rotate(-90deg);
    left: 0px;
    text-transform: uppercase;
}

.scroll {
    display: flex;
    bottom: 25px;
    position: absolute;
    left: 0;
    justify-content: center;
    align-items: center;
    width: max-content;
    cursor: pointer;
    
    p {font-size: 0.75rem; text-transform: uppercase;}
    
    ::before {
        content: " ";
        background: ${props=>props.black};
        width: 70px;
        height: 2px;
        margin-right: 15px;
    }
}

.footer {
    position: absolute;
    bottom: 20px;
    right: 10px;
    width: 100%;
}


@media screen and (max-width: 900px) {
    .page-name {
        display: none;
    }
    .content {
        max-width: 90%;
    }
    .footer {
        position: relative;
        bottom: 0;
        right: none;
    }
    .scroll {display: none;}
}

`;

export default ContentTemplate;