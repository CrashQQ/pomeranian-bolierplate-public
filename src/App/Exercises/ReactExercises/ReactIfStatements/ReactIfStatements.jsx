import { useState } from 'react';

import './style.css';

export function ReactIfStatements() {
  const [text, setText] = useState('');
  const [clickedCount, setClickedCount] = useState(0);

  function handleClick() {
    const newClickedCount = clickedCount + 1;
    if (newClickedCount > 5) {
      setText('ale klikasz');
    } else {
      setText('kliknąłeś mniej niż 5 razy');
    }

    setClickedCount(newClickedCount);
  }
  return (
    <div>
      <h1>React If statements</h1>
      <button onClick={handleClick}>Kliknij mnie!</button>
      <p>{text}</p>
      <p>ilość kliknięć: {clickedCount}</p>
    </div>
  );
}
