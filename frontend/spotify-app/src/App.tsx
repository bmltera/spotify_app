import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  
  return (
    <div className="App" >
      <h2> Roastify </h2>
      <h1>Roastify</h1>
      <div> roast my music taste</div>
      <div className="card">
        <button onClick={handleLogin}>
          login with spotify
        </button>
      </div>
      <div className="card">
        {isLoggedIn?(
          <div> <NewContent /> </div>
        ):(
          <InitialContent onLogin = {handleLogin} />
        )}
      </div>
    </div>
  )
}

function InitialContent({onLogin}: ({onLogin: () => void})) {
  return (
    <div>
      <p>roast my music taste</p>
      <button onClick={onLogin}>
        login with spotify
      </button>
    </div>
  )
}

function LandingPage(){
  const getSpotifyUserLogin = () => {
    fetch("http://127.0.0.1:3003/spotify/login")
  }
}

  // function LandingPage(){
  //   const getSpotifyUserLogin = () => {
  //     fetch("http://127.0.0.1:3003/spotify/login")
  //     .then((response) => response.text())
  //     .then(response => {
  //       window.location.replace(response);
  //     })
  //     }
  //   }
  

function NewContent() {
  LandingPage()
  return (
    <div>
      <p>welcome, I am your personalized music roaster</p>
    </div>
  )
}


export default App
