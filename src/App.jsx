import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import Navigation from './Navigation.jsx';
import { numbers } from './numbers.js';

const App = () => {
  const [currentNum, setCurrentNum] = useState(1);

  const handleNav = (event) => {
    setCurrentNum(+event.target.dataset.nav);
  };

  const handleRotate = (event) => {
    const isCard = event.target.closest('.card');
    if (!isCard) {
      return;
    }
    isCard.classList.toggle('rotate');
  };

  return (
    <div className='container'>
      <div className='nav'>
        {numbers.map((number) => (
          <Navigation
            key={number}
            currentNum={currentNum}
            handleNav={handleNav}
            number={number}
          />
        ))}
      </div>
      <div className='cards'>
        {numbers.map((number) => (
          <Card
            key={number * currentNum}
            handleRotate={handleRotate}
            firstNum={currentNum}
            secondNum={number}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
