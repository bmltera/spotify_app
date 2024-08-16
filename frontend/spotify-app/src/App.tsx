import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Callback from './pages/callback';
import reactLogo from './assets/react.svg'
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
        <Route path="/callback" element={<Callback />} />
        <Route path="/newpage" element={<NewPage />} /> {/* Page to navigate after callback */}
      </Routes>
    </Router>
  )
}

function Home(){
  return (
    <div className="App" >
      <h2> Roastify </h2>
      <h1>Roastify</h1>
      <div> roast my music taste</div>
      <div className="card">
        <button onClick={LandingPage}>
          login with spotify
        </button>
      </div>
    </div>

  )
}


// function Callback() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [authCode, setAuthCode] = useState(null);

//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     const code = query.get('code');
//     if (code) {
//       setAuthCode(authCode);
//       // Simulate fetch request and then navigate
//       setTimeout(() => {
//         navigate('/newpage'); // Redirect to newpage after processing code
//       }, 1000);
//     }
//   }, [location, navigate]);

//   return (
//     <div>
//       <h2>Processing Auth</h2>
//       {authCode ? <p>Auth code: {authCode}</p> : <p>No auth code found</p>}
//     </div>
//   );
// }

// function Callback() {
//   return (
//     <div>
//       <h2>Welcome to the New Page</h2>
//       <p>Your authenticated content goes here.</p>
//     </div>
//   );
// }

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
