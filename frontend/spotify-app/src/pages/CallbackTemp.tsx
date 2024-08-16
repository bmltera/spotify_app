import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import GoButton from '../assets/GoButton';

export default function CallbackTemp() {
    const [showAnalysis, setShow] = useState(false);

    return (
      <div>
        <div>
          <h1>Roastify</h1>
          <h2>roast my music taste</h2>
        </div>
        {
          showAnalysis ? 
            <div>
              <GrabData/>
            </div>: 
            <div>
        <h3>are you ready?</h3>
        <div onClick = {() => setShow(true)} >  
          <GoButton/>
        </div>
            </div>
        }
      </div>
    );
  }

  export function GrabData() {

    // grab token
    const [queryParameters] = useSearchParams()
    const token = queryParameters.get('token');
    const [body, setBody] = useState();
    const [showAnalysis, setShow] = useState(false);

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
    return(
      <div>
        {body ? <p>{body}</p> : <p><CircularProgress /></p>}
        </div>
      
    );
  }