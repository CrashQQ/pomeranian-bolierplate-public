import { useState } from 'react';

export function ReactOnClick() {
  const [text, setText] = useState('który przycisk został kliknięty?');
  const [number, setNumber] = useState(0);

  function handleClick(event) {
    setText(event.target.innerHTML);
  }
  function handleClickNumber(event) {
    setNumber(event.target.innerHTML);
  }
  return (
    <div>
      <h1> React onClick </h1>
      <button onClick={handleClick}>Pierwszy Przycisk</button>
      <button onClick={handleClick}>Drugi Przycisk</button>

      <button onClick={handleClick}>5</button>
      <button onClick={handleClick}>10</button>

      <p> {text}</p>
      <p> {number} </p>
    </div>
  );
}
