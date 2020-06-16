import React, {useRef, useState} from 'react';
import ContentTemplate from "../../template/content.template";
import Button from "../../../component/atoms/button";
import styled from "styled-components";
import {siteColors} from "../../../constants/siteColors";

const AboutPage = () => {
    
    const [loading, setLoading] = useState(false);
    const [resume, setResumeLink] = useState('#');
    
    const clickATag = useRef();
    
    const downloadResume = () => {
        setLoading(true);
        // api call here
        setResumeLink("/assets/resume/chrisjosh.pdf");
        
        setTimeout(() => {
            clickATag.current.click();
            setLoading(false);
        }, 2000)
    };
    
    
    return (
        <ContentTemplate>
            <Styling>
                
                <div className={'introduction'}>
                    <p>Hi, i'm joshua.</p>
                    <div style={{position: 'relative', background: siteColors.white, zIndex: '2'}}>
                        <p>a passionate software engineer</p>
                    </div>
                </div>
                
                <div className="image">
                    <img src={"/assets/images/aboutme.jpg"} alt=""/>
                </div>
                
                <div className="about-me">
                    <p>
                        Hi there, my name is Joshua Enyi-Christopher, I am a Well-organised person, problem solver with
                        high attention to detail. I have extensive programming experience and comfortable with both frontend
                        and backend, picking up another language is not a problem for me, although I primarily use React and
                        Python for most jobs.
                    </p>
                    
                    
                    <div className={'buttons'} style={{margin: '1rem 0'}}>
                        <span style={{display: 'none'}}>
                            <a href={resume} ref={clickATag} target="_blank" rel="noopener noreferrer" download/>
                        </span>
                        <Button onClick={downloadResume} isLoading={loading} primary>get my resume</Button>
                        <Button to={'/works'} secondary>view my works</Button>
                    </div>
                
                </div>
            
            
            </Styling>
        </ContentTemplate>
    );
    
};

const Styling = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 1fr auto;
grid-template-areas:
    "description image"
    "about about";
    
    

.image {
    width: 300px;
    position: relative;
    right: calc(100% - 285px);
    img {
        width: 100%;
    }
}

.introduction {
    font-size: 50px;
    font-weight: 600px;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 1rem;
}



.about-me {
    grid-area: about;
    margin: 1rem 0;
}

.buttons {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 200px));
    grid-auto-rows: 1fr;
    grid-gap: 20px;
    grid-template-areas:
        "button1 button2";
}

@media screen and (max-width: 1366px) {
    grid-template-columns: 1fr;
    .image {
        display: none;
    }
}

@media screen and (max-width: 500px) {
    .introduction p {
        font-size: 35px;
    }
    
    .buttons {
        grid-template-columns: 1fr;
        grid-template-areas:
            "button1"
            "button2";
    }
}

`;

export default AboutPage;