import React, { useState, useEffect } from 'react';

function ClickCounterWithEffect () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Nilai count berubah: ${count}`)
  }, [count]);

  return (
    <div>
      <p>Nilai: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  )
};

export default ClickCounterWithEffect;
