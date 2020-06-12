import React from 'react';

const GeneralError = ({message}) => {
    return (
        <div>
            {message ? message : 'Uh oh...'}
        </div>
    );
};

export default GeneralError;