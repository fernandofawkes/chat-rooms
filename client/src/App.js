import React, { useEffect, useState } from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import ChatRoom from './pages/ChatRoom';
import io from 'socket.io-client';

let socket;

const CONNECTION_PORT = 'localhost:3001/';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState('');
  const [userName, setUserName] = useState('');

  const [log, setLog] = useState([]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on('log', (data) => {
      setLog([...log, data]);
    });
  });

  const connectToRoom = ({ userName, room }) => {
    setUserName(userName);
    setRoom(room);
    setLoggedIn(true);
    socket.emit('join_room', room);
  };

  const sendMessage = (message) => {
    setLog([...log, {userName, message}]);

    socket.emit('message', {
      userName, message, room
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Chat App</h1>
      </header>
      {
        !loggedIn ? (<SignIn connect={connectToRoom} />) : (<ChatRoom room={room} log={log} sendMessage={sendMessage} />)
      }
    </div>
  );
}

export default App;
