import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

const PageNotFound = () => {
    const [count, setCount] = useState(3);
    const history = useHistory();
    
    
    useEffect(()=>{
        let counter = setTimeout(() => {
            // on mail success
            count > 1 ? setCount(count - 1) : history.push('/');
            
        }, 1000);
        
        return ()=> {clearTimeout(counter)}
    },[count, history]);
    
    return (
        <div>
            404 {`you will be redirected to the homepage in ${count}`}
        </div>
    );
};

export default PageNotFound;