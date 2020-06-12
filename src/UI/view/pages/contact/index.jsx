import React from 'react';
import {useHistory} from 'react-router-dom'
import NavBar from "../../../component/molecules/navigation";

const ContactPage = () => {
    const history = useHistory();
    
    return (
        <div>
            <NavBar isOpen={true}/>
            contact page
        </div>
    );
};

export default ContactPage;