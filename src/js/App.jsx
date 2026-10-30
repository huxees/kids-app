import React, { useState, useEffect } from 'react';

import '../css/style.css';
import images from './img.jsx';
import ChildPhone from './child/ChildPhone.jsx';
import ParentPhone from './parent/ParentPhone.jsx'; 

export default function App({ balance, activePurchases }) {
  const [childTab, setChildTab] = useState('main');
  const [parentTab, setParentTab] = useState('main');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phones-container">      
      <ChildPhone 
        balance={balance}
        activePurchases={activePurchases}
        childTab={childTab}
        setChildTab={setChildTab}
        currentTime={currentTime}
        images={images}
      />
      
      <ParentPhone 
        parentTab={parentTab}
        setParentTab={setParentTab}
        currentTime={currentTime}
        images={images}
      />
    </div>
  );
}