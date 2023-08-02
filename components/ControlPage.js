import React, { useState } from 'react';
import { FormControlLabel, Checkbox, FormGroup, FormControl, Radio, RadioGroup, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Controls = () => {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState(router.query.selectedCard || 'Card1');
  const [scrollDirection, setScrollDirection] = useState(router.query.scrollDirection || 'vertical');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [fontFamily, setFontFamily] = useState('');

  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
    router.push({ pathname: '/products', query: { selectedCard: event.target.value, scrollDirection } });
  };

  const handleScrollDirectionChange = (event) => {
    setScrollDirection(event.target.value);
    router.push({ pathname: '/products', query: { selectedCard, scrollDirection: event.target.value } });
  };

  const handleThemeChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case 'backgroundColor':
        setBackgroundColor(checked ? 'white' : '');
        break;
      case 'textColor':
        setTextColor(checked ? 'black' : '');
        break;
      case 'primaryColor':
        setPrimaryColor(checked ? 'blue' : '');
        break;
      case 'fontFamily':
        setFontFamily(checked ? 'Arial, sans-serif' : '');
        break;
      default:
        break;
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: scrollDirection === 'horizontal' ? 'row' : 'column',
    overflowX: scrollDirection === 'horizontal' ? 'auto' : 'hidden',
    overflowY: scrollDirection === 'vertical' ? 'auto' : 'hidden',
    height: '100vh',
    backgroundColor: backgroundColor,
    color: textColor,
    fontFamily: fontFamily,
  };

  return (
    <div>
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
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={backgroundColor === 'white'} onChange={handleThemeChange} name="backgroundColor" />}
            label="Background Color (White)"
          />
          <FormControlLabel
            control={<Checkbox checked={textColor === 'black'} onChange={handleThemeChange} name="textColor" />}
            label="Text Color (Black)"
          />
          <FormControlLabel
            control={<Checkbox checked={primaryColor === 'blue'} onChange={handleThemeChange} name="primaryColor" />}
            label="Primary Color (Blue)"
          />
          <FormControlLabel
            control={<Checkbox checked={fontFamily === 'Arial, sans-serif'} onChange={handleThemeChange} name="fontFamily" />}
            label="Font Family (Arial)"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Controls;