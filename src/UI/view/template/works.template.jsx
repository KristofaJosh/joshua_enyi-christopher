import React from 'react';
import styled from "styled-components";

const WorksTemplate = ({children}) => {
    return (
        <Styling>
            {children}
        </Styling>
    );
};

const Styling = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(200px,auto));


@media screen and (max-width: 1366px) {
    grid-template-columns: repeat(3, minmax(200px,auto));
}
@media screen and (max-width: 967px) {
    grid-template-columns: repeat(2, minmax(200px,auto));
}
@media screen and (max-width: 556px) {
    grid-template-columns: repeat(1, minmax(200px,auto));
}


`;



export default WorksTemplate;