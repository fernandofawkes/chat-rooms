import React, { useRef } from 'react';

const SignIn = ({connect}) => {

  const nome = useRef(null);
  const sala = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!nome.current.value) {
      nome.current.focus();
      return;
    }
    if(!sala.current.value) {
      sala.current.focus();
      return;
    }
    connect({userName: nome.current.value, room: sala.current.value});
  }



  return (
  <form className="chat-form" onSubmit={handleSubmit}>
      <div className="form-inner">
      <input ref={nome} type="text" placeholder="Insira um nome..."></input>
      <input ref={sala} type="text" placeholder="Insira uma sala..."></input>
      <button type="submit">Entrar</button>
    </div>
  </form>
  )
}

export default SignIn;