import React from 'react';
import styled from "styled-components";

const ContentTemplate = ({children}) => {
    return (
        <Styling>
            
            <span className={'page-name'}>{'page name'}</span>
            
            <div className="content">
                {children}
            </div>
        </Styling>
    );
};

const Styling = styled.div`
width: 100%;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;

.content {
    width: 80%;
    max-height: 90%;
}

.page-name {
    position: relative;
    transform: rotate(-90deg);
    left: -90px;
}

`;

export default ContentTemplate;