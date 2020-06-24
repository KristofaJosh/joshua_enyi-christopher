import React, {useContext, useEffect, useState} from 'react';
import ContentTemplate from "../../template/content.template";
import styled from "styled-components";
import {AiOutlineInstagram, AiOutlineSkype, BsPhone, FaTelegram, RiMailSendLine} from "react-icons/all";
import {siteColors} from "../../../constants/siteColors";
import Button from "../../../component/atoms/button";
import {FcCancel, FcCheckmark} from "react-icons/fc";
import Input, {TextArea} from "../../../component/atoms/input";
import StyleContext from "../../../context";
import axios from 'axios';
import {logErrorToMyService} from "../../../../helpers/errorReport";
import Text from "../../../component/atoms/typography";
import validateEmail from "../../../../helpers/validateEmail";

const ContactPage = () => {
    const {dispatch, store: {contact}} = useContext(StyleContext);
    const [sendMessage, setSendMessage] = useState({loading: false, button: 'send message', icon: ''});
    const [mail, setMail] = useState(
        {
            name: (contact && contact.name) || '',
            email: (contact && contact.email) || '',
            message: (contact && contact.message) || '',
            file: (contact && contact.file) || ''
        }
    );
    const [err, setErr] = useState({m: '', state: false});
    
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
    
    
    const writeMail = (e) => {
        setMail({...mail, [e.target.name]: e.target.value});
    };
    
    // component will mount
    useEffect(() => {
        dispatch({type: 'setContact', data: mail})
    }, [mail, dispatch]);
    
    
    const sendMail = () => {
        setSendMessage({...sendMessage, loading: true});
        
        const {name, email, message} = mail;
        
        if (name && email && message) {
            if (message.length < 10) {
                setErr({...err, m: 'words too few :-)', state: true});
                setSendMessage({...sendMessage, loading: false});
                return
            }
            if(!validateEmail(email)){
                setErr({...err, m: 'check your email', state: true});
                setSendMessage({...sendMessage, loading: false});
                return
            }
            
            axios({
                url: 'http://localhost:3500/send_mail',
                method: 'POST',
                data: mail,
            }).then((res) => {
                setSendMessage({...sendMessage, loading: false});
                
                if (res.data.state === 'sent') {
                    setSendMessage({...sendMessage, button: 'sent ', icon: <FcCheckmark/>});
                } else if (res.data.state === 'fail') {
                    setSendMessage({...sendMessage, button: 'failed ', icon: <FcCancel/>});
                }
                
                setTimeout(() => {
                    setSendMessage({...sendMessage, button: 'send message'})
                }, 2000)
                
            }).catch((err) => {
                logErrorToMyService(err);
                setSendMessage({...sendMessage, loading: false});
            });
            
        } else {
            setSendMessage({...sendMessage, loading: false});
            setErr({...err, m: 'you must fill all fields', state: true})
        }
        
    };
    
    useEffect(() => {
        if (err.state) {
            setTimeout(() =>
                setErr({...err, m: '', state: false}), 2000)
        }
    }, [err]);
    
    return (
        <ContentTemplate>
            <Styling>
                <div className="description">
                    <p>Get in touch!</p>
                    <p>I am interested in freelance opportunities – especially ambitious or large projects. However, if
                        you have something you want to talk about or bring to life, please do send me a message</p>
                </div>
                <div className="message">
                    <div className="contact-info">
                        {
                            contacts.map((el, index) => (
                                <a href={el.link} target={'_blank'} rel="noopener noreferrer" key={index}>
                                    <div style={{margin: '1.5rem 0', fontWeight: '600'}}>
                                        <p><span
                                            style={{marginRight: '10px'}}>{el.icon}</span>{" "}<span>{el.detail}</span>
                                        </p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                    <div className="message-box">
                        {err.state ? <span style={{color: 'red'}}><Text small>{err.m}</Text></span> : null}
                        <Input capitalize placeholder={'Name'} name={'name'} value={mail.name} onChange={writeMail}/>
                        <Input placeholder={'Email'} name={'email'} value={mail.email} onChange={writeMail}/>
                        <TextArea placeholder={'Message'} name={'message'} value={mail.message} onChange={writeMail}/>
                        <Button isLoading={sendMessage.loading} disabled={sendMessage.loading} onClick={sendMail}
                                secondary>{sendMessage.button}{sendMessage.icon}</Button>
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
        
        // input, textarea {
        //     display: block;
        //     width: 100%;
        //     border: 2px solid ${siteColors.black};
        //     margin: 0.75rem 0;
        //     padding: 1rem;
        //     text-indent: 10px;
        // }
        
        // input:nth-child(1){
        //     text-transform: capitalize;
        // }
        
        // textarea {
        //     resize: vertical;
        //     height: 200px;
        // }
        
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