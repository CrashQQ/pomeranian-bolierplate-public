import { useState } from 'react';
import './style.css';

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function ReactGuessNumber() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [inputNumber, setInputNumber] = useState(0);
  const [text, setText] = useState('');
  console.log(randomNumber, 'randomNumber');

  function handleChange(event) {
    setInputNumber(event.target.value);
  }
  function handleReset() {}
  function handleStart() {
    if (inputNumber > randomNumber) {
      setText('jestem większa');
    }
    if (inputNumber < randomNumber) {
      setText('jestem mniejsza');
    }
    if (inputNumber == randomNumber) {
      setText('gratulacje, trafiłeś');
    }
  }

  return (
    <div>
      <h1>Zgadywanie liczb</h1>
      <button onClick={handleStart}>start</button>
      <div>
        <input
          placeholder="Wpisz dowolną liczbę"
          onChange={handleChange}
          value={inputNumber}
          type="number"
        />
      </div>
      <p>{text}</p>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
