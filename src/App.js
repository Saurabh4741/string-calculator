import React, { useState } from 'react';
import { add } from './utils/stringCalculator';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (e) {
      setError(e.message);
      setResult(0);
    }
  };

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>String Calculator</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers here"
        style={{ padding: '0.5rem', width: '40%' }}
      />
      <div>
      <button onClick={handleCalculate} style={{ margin: '2rem', padding: '0.5rem' }}>
        Calculate
      </button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        {error ? (
          <p style={{ color: 'red' }}>Error: {error}</p>
        ) : (
          <p>Result: {result}</p>
        )}
      </div>
    </div>
  );
}

export default App;
