import React, {useContext, useState} from 'react';
import {useLocation} from "react-router-dom"
import Button from "../../../component/atoms/button";
import ContentTemplate from "../../template/content.template";
import StyleContext from "../../../context";
import {useQuery} from "@apollo/react-hooks";
import {logErrorToMyService} from "../../../../helpers/errorReport";
import Input from "../../../component/atoms/input";


const Login = () => {
    const [inputs, setInputs] = useState({username: '', password: ''});
    const [logging, setLogging] = useState({loading: false, message: ''});
    const {dispatch, Queries: {login}} = useContext(StyleContext);
    
    const {loading, error, data} = useQuery(login, {
        variables: {
            username: inputs.username,
            password: inputs.password
        }
    });
    
    
    const location = useLocation();
    
    const authenticate = (event) => {
        event.preventDefault();
        setLogging({...logging, loading: true});
        
        if (!loading) setLogging({...logging, loading: false});
        
        if (data.login.state && data.login.token) {
            dispatch({type: 'setToken', data: data.login})
        } else {
            setLogging({...logging, loading: false, message: data.login.message})
        }
        
        if (error) logErrorToMyService(error);
    };
    
    return (
        <>
            <ContentTemplate>
                <span>
                    {location.state && true ? location.state.message : null}
                    {logging.message && true ? logging.message : null}
                </span>
                <form onSubmit={authenticate}>
                    <Input name={"username"} placeholder={'Username'}
                           onChange={event => setInputs({...inputs, username: event.target.value})}/>
                    <Input type="password" name={"password"} placeholder={'Password'}
                           onChange={event => setInputs({...inputs, password: event.target.value})}/>
                    <Button secondary isLoading={logging.loading}>Login</Button>
                </form>
            </ContentTemplate>
        </>
    );
};

export default Login;