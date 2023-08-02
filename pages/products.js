import React, { useState } from 'react';
import axios from 'axios';
import Product from '../components/ProductPage';
import { useRouter } from 'next/router';
const Products = ({ products }) => {
  const router = useRouter();
  const selectedCard = router.query.selectedCard || 'Card1';
  const scrollDirection = router.query.scrollDirection || 'vertical';
    console.log(products)

  return (
    <div>
      <h1>Product Card 1:</h1>
      <Product products={products}/>
    </div>
  );
};
export async function getServerSideProps() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const data = response.data;
    const products = data.products;
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
