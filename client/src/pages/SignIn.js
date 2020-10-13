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
  <form className="logIn" onSubmit={handleSubmit}>
    <input ref={nome} type="text" placeholder="Insira um nome..."></input>
    <input ref={sala} type="text" placeholder="Insira uma sala..."></input>
    <button type="submit">Entrar</button>
  </form>
  )
}

export default SignIn;