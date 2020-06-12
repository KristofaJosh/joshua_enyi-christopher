import React from 'react';
import {useHistory} from 'react-router-dom'

const ContactPage = () => {
    const history = useHistory();
    
    setTimeout(() => {
        // on mail success
        history.push('/')
    }, 13000);
    
    return (
        <div>
            contact page
        </div>
    );
};

export default ContactPage;