import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const Controls = () => {
  const router = useRouter();

  const handleCardChange = (event) => {
    router.push({ pathname: '/products', query: { selectedCard: event.target.value } });
  };

  const handleScrollDirectionChange = (event) => {
    router.push({ pathname: '/products', query: { scrollDirection: event.target.value } });
  };

  const handleThemeChange = (event) => {
    // Handle theme changes here
  };

  return (
    <div>
      <div className="control-group">
        <h3>Product Card:</h3>
        <FormControl component="fieldset">
          <RadioGroup name="selectedCard" value={router.query.selectedCard || 'Card1'} onChange={handleCardChange}>
            <FormControlLabel value="Card1" control={<Radio />} label="Card1" />
            <FormControlLabel value="Card2" control={<Radio />} label="Card2" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="control-group">
        <h3>Scroll Direction:</h3>
        <FormControl component="fieldset">
          <RadioGroup name="scrollDirection" value={router.query.scrollDirection || 'vertical'} onChange={handleScrollDirectionChange}>
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
          value={'' /* Handle value */}
          onChange={handleThemeChange}
        />
        {/* Add other theme controls */}
      </div>
    </div>
  );
};

export default Controls;
