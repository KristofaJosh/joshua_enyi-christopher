import React from 'react';
import styled from "styled-components";
import {siteColors} from "../../../constants/siteColors";
import PropTypes from 'prop-types';

const Placeholder = ({spread=1}) => {
    
    
    return (
        <>
            {
                Array(spread).fill(null).map((el, index) => (
                    <Styling key={index}>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </Styling>
                ))
            }
        </>
    );
};

const Styling = styled.div`
position: relative;
width: 100%;
background: ${siteColors.white};
border: 0.5px solid #2013130a;
height: 200px;
padding: 1rem;

div {
  width: 100%;
  height: 10px;
  margin: 10px 0;
  border-radius: 15px;
  position: relative;
  animation: placeholder 2s infinite;
  animation-direction: alternate;
}

@keyframes placeholder {
  0%   {background: grey;}
  50%  {background: white;}
  75% {background: #938f8f;}
  100%   {background: white;}
}

`;

Placeholder.propTypes = {
    spread: PropTypes.number,
};

export default Placeholder;