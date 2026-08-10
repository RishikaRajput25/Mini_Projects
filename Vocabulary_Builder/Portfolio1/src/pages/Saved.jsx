




//currently successfully working
import React from 'react';
import LeftSection from '../components/LeftSection'; // Left side component for searched word
import RightSection from '../components/RightSection'; // Right side component for saved words

const Saved = () => {
  return (
    <div className="saved-container flex">
      <div className="left-section flex-1 p-1">
        <LeftSection />
      </div>
      <div className="right-section flex-1 p-1">
        <RightSection />
      </div>
    </div>
  );
}

export default Saved;
