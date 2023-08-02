import React, { useState } from 'react';
import axios from 'axios';
import CardOne from '../components/CardOne';
import CardTwo from '../components/CardTwo';
import { Grid } from '@mui/material';
const Products = ({ products }) => {
    const [selectedCard, setSelectedCard] = useState('Card1');
    const [scrollDirection, setScrollDirection] = useState('vertical');
    console.log(products)

  return (
    <div>
      <h1>Products</h1>
      <Grid container spacing={2}>
       {
        products?.map((product, id)=> (
            selectedCard === 'Card1' ?  (  <Grid key={id} item xs={12} sm={6} md={4} lg={3} sx={{ padding: '1rem' }}>
                <CardOne product={product} />
            </Grid>) : (

                <CardTwo key={id} product={product}/>
            )
        ))
      }
      </Grid>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const data = response.data;
    const products = data.products
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default Products;
