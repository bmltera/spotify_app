import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Callback() {
    
    // grab token
    const [queryParameters] = useSearchParams()
    const token = queryParameters.get('token');
    const [body, setBody] = useState();
    //console.log(token);

    useEffect(() => {
        fetch(`http://127.0.0.1:3003/spotify/test`,{
            method: 'GET',
            headers: {
                "token": token
            }as HeadersInit
        })
            .then((response) => response.json())
            .then((data) => {
                setBody(data.analysis.message.content);
                console.log(data.analysis.message.content);
            });
    },[]);

    return (
      <div>
        <h2>Your Analysis</h2>
        {body ? <p>{body}</p> : <p>No data found</p>}
      </div>
    );
  }