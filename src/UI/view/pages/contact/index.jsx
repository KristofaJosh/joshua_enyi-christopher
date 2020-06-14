import React from 'react';
import ContentTemplate from "../../template/content.template";
import styled from "styled-components";
import {AiOutlineInstagram, BsPhone, FaTelegram, RiMailSendLine} from "react-icons/all";

const ContactPage = () => {
    
    const contacts = [
        {icon: <RiMailSendLine/>, detail: 'christopherjoshua25@hotmail.com'},
        {icon: <BsPhone/>, detail: '+2347013722950'},
        {icon: <AiOutlineInstagram/>, detail: '@christofajosh'},
        {icon: <FaTelegram/>, detail: '@christofajosh'},
    ];
    
    return (
        <ContentTemplate>
            <Styling>
                <div className="description">
                    <p>Get in touch!</p>
                    <p>Do you have something you want to talk about or bring to life ? <br/> send me a message</p>
                </div>
                <div className="message">
                    <div className="contact-info">
                        {
                            contacts.map((el, index)=>(
                                <p key={index}>
                                    <span>{el.icon} </span>{el.detail}
                                </p>
                            ))
                        }
                 
                    </div>
                    <div className="message-box">
                        box
                    </div>
                </div>
            </Styling>
        </ContentTemplate>
    );
};

const Styling = styled.div`
display: grid;
grid-template-rows: 0.5fr 2fr;
grid-template-areas:
    "description"
    "message";


.message {
    display: flex;

    .contact-info, .message-box {
        width: 100%;
    }

}

@media screen and (max-width: 900px){
    .message {
        flex-direction: column;
    }
}

`;

export default ContactPage;