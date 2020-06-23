import React, {useContext, useState} from 'react';
import {useLocation} from 'react-router-dom';
import Button from "../../../component/atoms/button";
import ContentTemplate from "../../template/content.template";
import axios from "axios";
import {logErrorToMyService} from "../../../../helpers/errorReport";
import StyleContext from "../../../context";

const Login = () => {
    const [inputs, setInputs] = useState({username: '', password: ''});
    const [isLoading, setIsLoading] = useState(false);
    
    const {dispatch} = useContext(StyleContext);
    
    const location = useLocation();
    
    const authenticate = (event) => {
        event.preventDefault();
        
        axios({
            url: 'http://localhost:4000/authenticate_me',
            method: 'POST',
            data: inputs,
        }).then((response) => {
            setIsLoading(false);
            // save token
            dispatch({type: 'setToken', data: response.data});
        }).catch((err) => {
                setIsLoading(false);
                logErrorToMyService(err)
            }
        );
    };
    
    return (
        <>
            <ContentTemplate>
                <span>
                    {location.state && true ? location.state.message : null}
                </span>
                <form onSubmit={authenticate}>
                    <input type="text" name={"username"}
                           onChange={event => setInputs({...inputs, username: event.target.value})}/>
                    <input type="password" name={"password"}
                           onChange={event => setInputs({...inputs, password: event.target.value})}/>
                    <Button secondary isLoading={isLoading}>Login</Button>
                </form>
            </ContentTemplate>
        </>
    );
};

export default Login;