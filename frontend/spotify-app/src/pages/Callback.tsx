import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Callback() {
    
    // grab token
     const [queryParameters] = useSearchParams()
     const code = queryParameters.get('token');
    // const [token, setBody] = useState();
    // console.log(queryParameters.get('code'));


    // useEffect(() => {
    //     fetch(`http://127.0.0.1:3003/spotify/dummy`,{
    //         method: 'GET',
    //         headers: {
    //             "code": code
    //         }
    //     })
    //         // .then((response) => response.json())
    //         // .then((data) => {
    //         //     setBody(data);
    //         //     console.log(data);
    //         // });
    // })

    return (
      <div>
        <h2>Your Analysis</h2>
        <p>Token: {code}</p>
      </div>
    );
  }