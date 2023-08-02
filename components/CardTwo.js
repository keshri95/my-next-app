import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const CardTwo = ({product}) => {
    console.log(product)
  return (
    <Card>
      <CardContent>
        <Typography>CardTwo</Typography>
      </CardContent>
    </Card>
  );
};

export default CardTwo;
