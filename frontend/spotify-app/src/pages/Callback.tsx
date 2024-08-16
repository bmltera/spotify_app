import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Callback() {
    
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
            }
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
        {body ? <p>{body}</p> : <p>No data found</p>}
      </div>
    );
  }