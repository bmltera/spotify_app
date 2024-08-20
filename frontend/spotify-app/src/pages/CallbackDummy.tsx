import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export default function CallbackDummy() {
    
    // grab token
    const [queryParameters] = useSearchParams()
    const token = queryParameters.get('token');
    const [body, setBody] = useState();
    //console.log(token);

    useEffect(() => {
        fetch(`http://127.0.0.1:3003/spotify/dummy`,{
            method: 'GET',
            headers: {
                "token": token
            }as HeadersInit
        })
            .then((response) => response.json())
            .then((data) => {
                setBody(data.data);
                console.log(data.data);
            });
    },[]);

    return (
      <div>
        <h2>Your Analysis</h2>
        {body ? <p>{body}</p> : <p><CircularProgress /></p>}
      </div>
    );
  }