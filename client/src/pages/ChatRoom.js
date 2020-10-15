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
      {log.map(message => (
      <div className="message">
        <h3 className="message-author">{message.userName}</h3>
        <p className="message-text">{message.message}</p>
      </div>
      ))}
    </div>
    <form onSubmit={enviarMensagem} className="chat-form">
      <div className="form-inner">
      <input ref={mensagem} type="text" placeholder="escreva sua mensagem" />
      <button type="submit">enviar</button>
      </div>
    </form>
  </div>
  )
}

export default ChatRoom;