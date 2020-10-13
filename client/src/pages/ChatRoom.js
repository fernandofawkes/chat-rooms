import React, { useRef } from 'react';

const ChatRoom = ({room, log, sendMessage}) => {
  const mensagem = useRef(null);
  
  const enviarMensagem = (e) => {
    e.preventDefault();
    if(!mensagem.current.value) return;

    sendMessage(mensagem.current.value);
    mensagem.current.value = '';
  }

  return (
  <div className="chat">
    <h2>{room} Chat Room</h2>
    <div className="mensagens">
      {JSON.stringify(log)}
    </div>
    <form onSubmit={enviarMensagem}>
      <input ref={mensagem} type="text" placeholder="escreva sua mensagem" />
      <button type="submit">enviar</button>
    </form>
  </div>
  )
}

export default ChatRoom;