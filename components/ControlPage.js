import React from 'react';
import { FormControlLabel, Checkbox, FormGroup, FormControl, Radio, RadioGroup, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useTheme } from '../components/ThemeContext';

const Controls = () => {
  const router = useRouter();
  const { theme, updateTheme } = useTheme();

  const handleCardChange = (event) => {
    updateTheme({ selectedCard: event.target.value });
    router.push({ pathname: '/products', query: { selectedCard: event.target.value, scrollDirection: theme.scrollDirection } });
  };

  const handleScrollDirectionChange = (event) => {
    const scrollDirection = event.target.value;
    updateTheme({ scrollDirection });
    router.push({ pathname: '/products', query: { selectedCard: theme.selectedCard, scrollDirection } });
  };

  const handleThemeChange = (event) => {
    const { name, checked } = event.target;
    updateTheme({ [name]: checked ? 'true' : '' });
  };

  return (
    <div>
      <div className="control-group">
        <h3>Product Card:</h3>
        <FormControl component="fieldset">
          <RadioGroup name="selectedCard" value={theme.selectedCard} onChange={handleCardChange}>
            <FormControlLabel value="Card1" control={<Radio />} label="Card1" />
            <FormControlLabel value="Card2" control={<Radio />} label="Card2" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="control-group">
        <h3>Scroll Direction:</h3>
        <FormControl component="fieldset">
          <RadioGroup name="scrollDirection" value={theme.scrollDirection} onChange={handleScrollDirectionChange}>
            <FormControlLabel value="vertical" control={<Radio />} label="Vertical" />
            <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="control-group">
        <h3>Theme:</h3>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={theme.backgroundColor === 'true'} onChange={handleThemeChange} name="backgroundColor" />}
            label="Background Color (White)"
          />
          <FormControlLabel
            control={<Checkbox checked={theme.textColor === 'true'} onChange={handleThemeChange} name="textColor" />}
            label="Text Color (Black)"
          />
          <FormControlLabel
            control={<Checkbox checked={theme.primaryColor === 'true'} onChange={handleThemeChange} name="primaryColor" />}
            label="Primary Color (Blue)"
          />
          <FormControlLabel
            control={<Checkbox checked={theme.fontFamily === 'true'} onChange={handleThemeChange} name="fontFamily" />}
            label="Font Family (Arial)"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Controls;
