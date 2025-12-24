"use client"

import { useState } from 'react';

export default function Home() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const checkNumber = () => {
    const n = parseInt(number);
    if (isNaN(n)) {
      setResult('Vui lòng nhập một số hợp lệ');
    } else {
      setResult(n % 2 === 0 ? 'Số chẵn' : 'Số lẻ');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>CMC: Kiểm tra số chẵn lẻ</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Nhập số..."
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button onClick={checkNumber} style={{ padding: '10px 20px' }}>
        Kiểm tra
      </button>
      <p style={{ marginTop: '20px', fontSize: '1.5rem' }}>{result}</p>
    </div>
  );
}