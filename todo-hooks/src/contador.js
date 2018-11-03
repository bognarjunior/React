import React, { useState, useEffect } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Seu contador esta ${count} `;
  });

  return (
    <div>
      <p>Seu contador esta {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Adicionar
      </button>
      <button onClick={() => setCount(count - 1)}>
        Subtrair
      </button>
    </div>
  );
}