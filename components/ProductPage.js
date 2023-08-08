import React from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import { Grid, Container } from '@mui/material';
import { useTheme } from '../components/ThemeContext';

const Product = ({ products }) => {
  const { theme } = useTheme();
  const selectedCard = theme.selectedCard || 'Card1';
  const scrollDirection = theme.scrollDirection || 'vertical';

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.backgroundColor ? 'white' : '',
    color: theme.textColor ? 'purple' : '', 
    fontFamily: theme.fontFamily ? 'Roboto, sans-serif' : '',
    primaryColor: theme.primaryColor ? 'red' : ''
  };

  return (
    <div style={containerStyle}>
      {scrollDirection === 'horizontal' ? (
        <Container className="horizontal-scroll">
          <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll' }}>
            {products?.map((product, id) => (
              <div key={id} style={{ minWidth: '345px', padding: '1rem' }}>
                {selectedCard === 'Card1' ? (
                  <CardOne product={product} theme={theme} /> 
                ) : (
                  <CardTwo product={product} theme={theme} /> 
                )}
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <Container className="vertical-scroll">
          <Grid container spacing={2}>
            {products?.map((product, id) => (
              <Grid key={id} item xs={12} sm={6} md={4} lg={3} sx={{ padding: '1rem' }}>
                {selectedCard === 'Card1' ? (
                  <CardOne product={product} theme={theme} />
                ) : (
                  <CardTwo product={product} theme={theme} /> 
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Product;
