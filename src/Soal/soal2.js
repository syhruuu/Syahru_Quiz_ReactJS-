import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  };

  return (
    <div>
      <p>Jumlah like: {count}</p>
      <button onClick={handleClick}>Like Me!</button>
    </div>
  )
};

export default ClickCounter;