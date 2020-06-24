import React from 'react';
import styled, {css} from "styled-components";
import {siteColors} from "../../../constants/siteColors";
import Text from "../typography";


const Input = ({capitalize, ...props}, ref) => {
    return (
        <Styling  capitalize={capitalize}>
            <input {...props} ref={ref}/>
        </Styling>
    );
};


export const TextArea = (props) => {
    return (
        <StylingTextArea>
            <textarea {...props} />
        </StylingTextArea>
    );
};

export const Select = ({name, id, options, active, onChange, ...props}) => {
    
    return (
        <StylingDropDown>
            <select name={name} id={id} {...props} onChange={onChange}>
                {active ? <option value={''} disabled>Select...</option> :
                    <option value={''} disabled selected>Select...</option>
                }
                {
                    options.map((el, index) => (
                        <option key={index} value={el.value} selected={el.value === active}>{el.name}</option>
                    ))
                }
            </select>
        </StylingDropDown>
    )
};

export const Group = ({name, children}) => {
    
    return (
        <StylingGroup>
            <fieldset>
                <legend><Text capitalize>{name}</Text></legend>
                {children}
            </fieldset>
        </StylingGroup>
    )
};

Input.propTypes = {};
Select.propTypes = {};

const Styling = styled.div`
display: block;
margin: 0.75rem 0;


input, textarea, select, fieldset {
    border: 2px solid ${siteColors.black};
    padding: 1rem;
    width: 100%;
    ${props=>props.capitalize && css`
        text-transform: capitalize;
    `}
}

input {
    text-indent: 10px;
}
`;

const StylingTextArea = styled(Styling)`
textarea {
    font-family: Inter;
    text-indent: 10px;
    resize: vertical;
    min-height: 200px;
}
`;

const StylingGroup = styled(Styling)`
fieldset {

}
`;

const StylingDropDown = styled(Styling)`

`;

export default React.forwardRef(Input);