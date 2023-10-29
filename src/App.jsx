import React, { useState } from 'react';
import './styles/app.css';

function App() {
  const [input, setInput] = useState(''); 

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <div className="container">
        <div className="calc-container">
          <div className="calc-input">
            <input type="text" value={input} readOnly />
          </div>
          <div className="calc-btns">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C'].map((btn, index) => (
              <button key={index} onClick={() => handleButtonClick(btn)}>
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
