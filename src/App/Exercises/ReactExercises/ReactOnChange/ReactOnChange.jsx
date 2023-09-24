import { useState } from 'react';

export function ReactOnChange() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <h1> React OnChange </h1>
      <div>
        <input
          type="text"
          placeholder="Wpisz Swoje imie"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>Moje imię to: {name}</div>
    </div>
  );
}
