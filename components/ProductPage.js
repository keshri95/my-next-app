import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import { Grid } from '@mui/material';


const Product = ({ products }) => {
  const router = useRouter();
  const selectedCard = router.query.selectedCard || 'Card1';
  const scrollDirection = router.query.scrollDirection || 'vertical';
  const containerStyle = {
    display: 'flex',
    flexDirection: scrollDirection === 'horizontal' ? 'row' : 'column',
    overflowX: scrollDirection === 'horizontal' ? 'auto' : 'hidden',
    overflowY: scrollDirection === 'vertical' ? 'auto' : 'hidden',
    height: '100vh',
  };


  return (
    <div>
      <div style={containerStyle}>
      <Grid container spacing={2}>
        {products?.map((product, id) =>
          selectedCard === 'Card1' ? (
            <Grid key={id} item xs={12} sm={6} md={4} lg={3} sx={{ padding: '1rem' }}>
              <CardOne product={product} />
            </Grid>
          ) : (
            <Grid key={id} item xs={12} sm={6} md={4} lg={3} sx={{ padding: '1rem' }}>
                <CardTwo key={id} product={product} />
            </Grid>
          )
        )}
      </Grid>
        </div>
    </div>
  );
};



export default Product;
