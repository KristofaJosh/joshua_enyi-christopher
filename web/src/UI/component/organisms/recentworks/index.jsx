import React from 'react';
import styled from "styled-components";

const RecentWorks = () => {
    return (
        <Styling>
            <div className={'overlay'}>
            
            </div>
        </Styling>
    );
};

const Styling = styled.div`
position: relative;
background: red;

height: 150px;

.overlay {
    transition: all 1s;
    position: absolute;
    height: 100%;
    width: 100vw;
    background: blue;
    top: 0;
    right: 100vw;
    
    :hover {
        right: 0vw;
    }
 
}
`;

export default RecentWorks;