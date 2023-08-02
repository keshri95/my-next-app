import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { HiOutlineColorSwatch, HiOutlineArrowsExpand, HiOutlineFontFamily } from 'react-icons/hi';

const Controls = () => {
  const [selectedCard, setSelectedCard] = useState('Card1');
  const [scrollDirection, setScrollDirection] = useState('vertical');
  const [theme, setTheme] = useState({
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    primaryColor: '#007BFF',
    fontFamily: 'Arial, sans-serif',
  });

  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
  };

  const handleScrollDirectionChange = (event) => {
    setScrollDirection(event.target.value);
  };

  const handleThemeChange = (event) => {
    const { name, value } = event.target;
    setTheme((prevTheme) => ({ ...prevTheme, [name]: value }));
  };

  return (
    <div>
      <h1>Controls</h1>

      <div className="control-group">
        <h3>Product Card:</h3>
        <FormControl component="fieldset">
          <RadioGroup name="selectedCard" value={selectedCard} onChange={handleCardChange}>
            <FormControlLabel value="Card1" control={<Radio />} label="Card1" />
            <FormControlLabel value="Card2" control={<Radio />} label="Card2" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="control-group">
        <h3>Scroll Direction:</h3>
        <FormControl component="fieldset">
          <RadioGroup name="scrollDirection" value={scrollDirection} onChange={handleScrollDirectionChange}>
            <FormControlLabel value="vertical" control={<Radio />} label="Vertical" />
            <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="control-group">
        <h3>Theme:</h3>
        <TextField
          name="backgroundColor"
          label="Background Color"
          value={theme.backgroundColor}
          onChange={handleThemeChange}
        />
        <TextField name="textColor" label="Text Color" value={theme.textColor} onChange={handleThemeChange} />
        <TextField name="primaryColor" label="Primary Color" value={theme.primaryColor} onChange={handleThemeChange} />
        <TextField name="fontFamily" label="Font Family" value={theme.fontFamily} onChange={handleThemeChange} />
      </div>
    </div>
  );
};

export default Controls;
