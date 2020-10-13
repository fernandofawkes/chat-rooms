import React, { useState } from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import ChatRoom from './pages/ChatRoom';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div className="App">
      <h1>Chat App</h1>
      {
        !loggedIn ? (<SignIn />) : (<ChatRoom />)
      }
    </div>
  );
}

export default App;
