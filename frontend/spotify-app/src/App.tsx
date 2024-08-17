import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Callback from './pages/Callback';
import CallbackDummy from './pages/CallbackDummy';
import CallbackTemp from './pages/CallbackTemp';
import reactLogo from './assets/react.svg'
import LoginButton from './assets/LoginButton';
//MUI
import Button from '@mui/material/Button';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<CallbackTemp />} />
        <Route path="/newpage" element={<NewPage />} /> {/* Page to navigate after callback */}
      </Routes>
    </Router>
  )
}

function Home(){
  return (
    <div className="App" >
      <h1>roastify</h1>
      <h2> roast my music taste</h2>
      <div className="card">
        <div onClick={LandingPage}>  
          <LoginButton />
        </div>
      </div>
    </div>

  )
}



// NewPage Component

function NewPage() {
  return (
    <div>
      <h2>Welcome to the New Page</h2>
      <p>Your authenticated content goes here.</p>
    </div>
  );
}


const LandingPage = () => {
  // Replace with the actual Spotify authorization URL
  const spotifyAuthUrl = "http://127.0.0.1:3003/spotify/login";
  
  window.location.href = spotifyAuthUrl;
};

function NewContent() {
  LandingPage()
  return (
    <div>
      <p>welcome, I am your personalized music roaster</p>
    </div>
  )
}


export default App
