import React, { useState, useEffect } from 'react';

const Radius = () => {
  // Load the selected option from local storage on component mount
  const initialSelectedOption = localStorage.getItem('selectedOption') || null;
  const [selectedOption, setSelectedOption] = useState(initialSelectedOption);

  const handleOptionChange = (event) => {
    const newSelectedOption = event.target.value;

    // Update state and local storage with the selected option
    setSelectedOption(newSelectedOption);
    localStorage.setItem('selectedOption', newSelectedOption);
  };

  useEffect(() => {
    // Load the selected option from local storage on page reload
    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
      setSelectedOption(storedOption);
    }
  }, []); // Run this effect only on component mount

  return (
    <div>
      <div style={{ float: 'right' }}>
        <label>
          <input
            type="radio"
            name="colorRadio"
            value="f1"
            checked={selectedOption === 'f1'}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="colorRadio"
            value="f2"
            checked={selectedOption === 'f2'}
            onChange={handleOptionChange}
          />
          Option 2
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="colorRadio"
            value="f3"
            checked={selectedOption === 'f3'}
            onChange={handleOptionChange}
          />
          Option 3
        </label>
        <br />
      </div>

      <div style={{ float: 'left' }} className={`box ${selectedOption}`}>
        {selectedOption && `This is ${selectedOption}`}
      </div>
    </div>
  );
};

export default Radius;
