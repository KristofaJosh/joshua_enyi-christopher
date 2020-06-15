import React from 'react';
import ContentTemplate from "../../template/content.template";
import styled from "styled-components";
import {AiOutlineInstagram, AiOutlineSkype, BsPhone, FaTelegram, RiMailSendLine} from "react-icons/all";
import {siteColors} from "../../../constants/siteColors";
import Button from "../../../component/atoms/button";

const ContactPage = () => {
    
    const contacts = [
        {
            icon: <RiMailSendLine/>,
            detail: 'christopherjoshua25@hotmail.com',
            link: 'mailto:christopherjoshua25@hotmail.com'
        },
        {icon: <BsPhone/>, detail: '+2347013722950', link: 'tel:+2347013722950'},
        {icon: <AiOutlineInstagram/>, detail: '@christofajosh', link: 'https://www.instagram.com/christofajosh/'},
        {icon: <FaTelegram/>, detail: '@Christofajosh', link: 'https://t.me/Christofajosh'},
        {icon: <AiOutlineSkype/>, detail: '@Christofajosh', link: 'skype:christofajosh?chat'},
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
                            contacts.map((el, index) => (
                                <a href={el.link} target={'_blank'} rel="noopener noreferrer">
                                    <div key={index} style={{margin: '1.5rem 0', fontWeight: '600'}}>
                                        <p><span
                                            style={{marginRight: '10px'}}>{el.icon}</span>{" "}<span>{el.detail}</span>
                                        </p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                        <div className="message-box">
                            <input type="text" placeholder={'name'}/>
                            <input type="text" placeholder={'email'}/>
                            <textarea placeholder={'message'}/>
                            <Button secondary>send message</Button>
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

.description {
    p {
        margin: 1.2rem 0;
        :nth-child(1){
            font-size: 50px;
        }
        :nth-child(2){
            font-size: 1rem;
        }
    }
}

.message {
    display: flex;
    width: 100%;

    .contact-info, .message-box {
        max-width: 600px;
        width: 100%;
    }
    
    .message-box {
        
        input, textarea {
            display: block;
            width: 100%;
            border: 2px solid ${siteColors.black};
            margin: 0.75rem 0;
            padding: 1rem;
            text-indent: 10px;
        }
        
        input:nth-child(1){
            text-transform: capitalize;
        }
        
        textarea {
            resize: vertical;
            height: 200px;
        }
        
    }
    

}

@media screen and (max-width: 900px){

    .message {
        flex-direction: column;
    }
    
    .description {
        p {
            :nth-child(1){
                font-size: 38px;
            }
            :nth-child(2){
                font-size: 0.8rem;
            }
        }
    }
    
}

`;

export default ContactPage;